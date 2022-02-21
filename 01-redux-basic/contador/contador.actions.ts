import { Action } from '../ngrx-fake/ngrx';

// Actions
export const incrementadorAction: Action = {
  type: 'INCREMENTAR'
};

export const decrementadorAction: Action = {
  type: 'DECREMENTAR'
};

export const multipicadorAction: Action = {
  type: 'MULTIPICAR',
  payload: 4

};
export const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 2

};

export const resetAction: Action = {
  type: 'RESET'
};