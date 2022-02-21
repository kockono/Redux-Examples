import { incrementadorAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Reducer } from "./ngrx-fake/ngrx";
import { Action } from './ngrx-fake/ngrx';


class Store<T> {

  constructor( private reducer: Reducer<T>, 
               private state: T ) {

  }

  getState() {
    return this.state;
  }

  // Ejecuta la acción
  dispatch( action: Action ) {
    this.state = this.reducer(this.state, action)
  }

}

const store = new Store( contadorReducer, 10 )
console.log( store.getState() );

store.dispatch( incrementadorAction )

console.log( store.getState() );

