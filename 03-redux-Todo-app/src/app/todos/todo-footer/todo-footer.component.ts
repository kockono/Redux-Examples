import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Component, OnInit } from '@angular/core';
import * as actions from './../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValido = 'todos';
  filtros: actions.filtrosValido[] = ['completado','pendientes', 'todos'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(res => {
      this.filtroActual = res;
    })
  }

  cambiarFiltro(filtro:actions.filtrosValido){
    this.store.dispatch(actions.setFiltro({ filtro: filtro }))

  }

}
