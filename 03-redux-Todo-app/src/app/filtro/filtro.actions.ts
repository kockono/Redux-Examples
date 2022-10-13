import { createAction, props } from "@ngrx/store";

export type filtrosValido = 'todos' | 'completado' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] set Filtro',
  props<{ filtro:filtrosValido }>()
  );
