import { Component, OnInit } from '@angular/core';

// NgRx
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

// Modelos
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('todos')
              .subscribe( todos => {
                console.log( todos );
                this.todos = todos;
              });

  }

}
