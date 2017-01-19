import { Store } from './store';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreHelper {
  constructor(private store: Store) {} // todo a bug can't delete new card first

  update(prop, state) { // prop and state are back from backend
    const currentState = this.store.getState();
    this.store.setState(Object.assign({}, currentState, {[prop]: state}))
  }

  add(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: [state, ...collection]}));
  }

  findAndUpdate(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.map(item => {
      if (item.id !== state.id) {
        return item;
      }
      return Object.assign({}, item, state);
    })}));
  }

  findAndDelete(prop, id) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.filter(item => item.id !== id)}));
  }
}
