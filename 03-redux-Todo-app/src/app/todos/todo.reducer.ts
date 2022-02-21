import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Comprar Comida'),
  new Todo('Segui Estudiando'),
];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto } ) => [...state, new Todo( texto )] ), // Extrae c/u de los items y regresalos independientemente

);
 
export function todoReducer(state:any, action:any) {
  return _todoReducer(state, action);
}