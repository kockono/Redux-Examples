import { Component, OnInit } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filtrosValido } from './../../filtro/filtro.actions';

// Modelos
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValido;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    // Selecciona en nombre de la propiedad de la interface AppState
    // this.store.select('todos')
    //           .subscribe( todos => {
    //             this.todos = todos;
    //           });
    this.store.subscribe( ({ todos, filtro }) => {

      this.todos        = todos;
      this.filtroActual = filtro;

    });

  }

}
