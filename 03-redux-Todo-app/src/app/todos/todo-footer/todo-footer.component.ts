import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Component, OnInit } from '@angular/core';
import * as actions from './../../filtro/filtro.actions';
import { borrarTodos } from './../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValido = 'todos';
  filtros: actions.filtrosValido[] = ['completado','pendientes', 'todos'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(res => {
    //   this.filtroActual = res;
    // })
    this.store.subscribe(state => {

      this.filtroActual = state.filtro;
      // Cuenta el numero de completados
      this.pendientes   = state.todos.filter( todo => !todo.completado).length;

    })
  }

  cambiarFiltro(filtro:actions.filtrosValido){
    this.store.dispatch(actions.setFiltro({ filtro: filtro }))

  }

  limpiarCompletados() {
    this.store.dispatch( borrarTodos() )
  }

}
