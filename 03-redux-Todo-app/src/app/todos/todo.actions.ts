import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
  );

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()

);

export const toggleAll = createAction(
  '[TODO]  Seleccionar todos los Todo',
  props<{ completado: boolean }>()

);

export const editar = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number, texto: string }>()

);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()

);

export const borrarTodos = createAction('[TODO] Borrar Todos los Todo');
