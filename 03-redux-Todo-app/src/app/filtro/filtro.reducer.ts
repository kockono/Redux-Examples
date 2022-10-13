import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValido } from './filtro.actions';

export const initialState: filtrosValido = 'todos';

const _filtroReducer = createReducer<filtrosValido>(initialState,
  on(setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state:any, action:any) {
  return _filtroReducer(state, action);
}
