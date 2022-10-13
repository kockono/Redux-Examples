import { filtroReducer } from './../filtro/filtro.reducer';
import { filtrosValido } from '../filtro/filtro.actions';

import { Todo } from "./models/todo.model"
import { ActionReducerMap } from "@ngrx/store"
import { todoReducer } from "./todo.reducer"

// Aquí iran todos nuestros States
export interface AppState {
  todos: Todo[],
  filtro: filtrosValido
}

// Tienen que venir de la interface los valores filtro, todos
export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
