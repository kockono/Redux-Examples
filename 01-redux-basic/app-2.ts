import { decrementadorAction, dividirAction, incrementadorAction, multipicadorAction, resetAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';

console.log( contadorReducer( 10, incrementadorAction ) );

console.log( contadorReducer( 10, decrementadorAction ) );

console.log( contadorReducer( 10, multipicadorAction ) );

console.log( contadorReducer( 10, dividirAction ) );

console.log( contadorReducer( 10, resetAction ) );

