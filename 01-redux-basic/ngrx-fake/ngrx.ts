export interface Action {
  type:string,
  payload?: any

}


// Va regresar lo que le manden si es un string String si es un number un number
export interface Reducer<T> {
  ( state: T, action: Action ): T

}