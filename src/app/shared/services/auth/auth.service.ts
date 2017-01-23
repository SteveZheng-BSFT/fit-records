import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '../store/store';
import { StoreHelper } from '../store/store-helper';
import { ApiService } from '../api/api.service';

@Injectable()
export class AuthService implements CanActivate{
  JWT_KEY: string = 'json_web_token';
  JWT: string = '';

  constructor(private router: Router, private store: Store,
              private storeHelper: StoreHelper, private apiService: ApiService) {
    const token = localStorage.getItem(this.JWT_KEY);

    if(token) {
      this.setJwt(token);
    }
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);

    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['', 'auth'])
    }
  }

  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }

  setJwt(jwt: string) {
    localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({Authorization: `Bearer ${jwt}`});
  }

  authenticate(path, credits): Observable<any> {
    return this.apiService.post(`/${path}`, credits)
      .do(res => this.setJwt(res.token))
      .do(res => this.storeHelper.update('user', res.data))
      .map(res => res.data);
  }

  signout() {
    localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['auth']);
  }

}
