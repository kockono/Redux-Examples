import { Store, createStore } from 'redux';
import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';

const store: Store = createStore(  contadorReducer );

store.dispatch( incrementadorAction );

store.subscribe(() => {
  console.log( 'Subscribe', store.getState() );
  
});

store.dispatch(incrementadorAction)