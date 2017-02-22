import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

  // event store
  private static _emitters: { [id: string]: EventEmitter<any> } = {};

  // get a eventEmitter based on id
  static get(id: string): EventEmitter<any> {
    if (!this._emitters[id]) {
      this._emitters[id] = new EventEmitter();
    }
    return this._emitters[id];
  }

  constructor() { }

}
