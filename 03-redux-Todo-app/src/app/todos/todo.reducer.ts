import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, borrarTodos, } from './todo.actions';

export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a la apatia'),
  new Todo('Comprar un Mazda 6'),
  new Todo('Comprar un Tesla'),
  new Todo('Comprar una Casa'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear,  (state, { texto } ) => [...state, new Todo( texto )]), // Extrae c/u de los items y regresalos independientemente
  on(borrar, (state, { id } ) => state.filter( todo => todo.id !== id ) ),
  on(borrarTodos, state => state.filter( todo => !todo.completado) ), // Todos los todo completado los regresara
  on(toggle, (state, { id } ) => {

    return state.map( todo => {

      if( todo.id === id) { // De no ser la misma id no podra cambiarlo
        return {
          ...todo, // Deja todas la propiedades igual pero el completado cambialo a lo contrario
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
  }),
  on(toggleAll, (state, { completado } ) => state.map( todo => {
      return {
        ...todo,
        completado: completado
      }
  })),

  on(editar, (state, { id, texto } ) => {
    console.log( state )
    return state.map( todo => {

      if( todo.id === id) { // De no ser la misma id no podra cambiarlo
        return {
          ...todo, // Deja todas la propiedades igual pero el completado cambialo a lo contrario
          texto: texto
        }
      } else {
        return todo;
      }

    });
  }),



);




export function todoReducer(state:any, action:any) {
  return _todoReducer(state, action);
}
