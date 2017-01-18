import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Record {
  color: string;
  title: string;
  value: string;
  id?: string | number;
  createdAt?: string;
  updatedAt?: string;
  userId: string;
}

export interface State {
  records: Record[];
}

const defaultState: State = {
  records: []
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private store = _store;
  changes = this.store.asObservable().distinctUntilChanged();

  setState(state: State) {
    this.store.next(state);
  }

  getState(): State {
    return this.store.getValue();
  }

  purge() {
    this.store.next(defaultState);
  }
}
