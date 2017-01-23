import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  headers: Headers = new Headers({
    'Content-type': 'application/json',
    Accept: 'application/json'
  });
  options = new RequestOptions({headers: this.headers});

  api_url: string = 'api';

  constructor(private http: Http) { }

  get(path: string): Observable<any> {
    // check errors first and then get json format
    return this.http.get(`${this.api_url}${path}`, this.options)
      .map(this.checkErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  post(path: string, body): Observable<any> {
    return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), this.options)
      .map(this.checkErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  del(path: string): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`, this.options)
      .map(this.checkErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  setHeaders(headers) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }

  private getJson(res: Response) {
    return res.json();
  }

  private checkErrors(res: Response): Response {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const error = new Error(res.statusText);
      error['response'] = res;
      console.error(error);
      throw error;
    }
  }
}
