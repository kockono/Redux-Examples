import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Todo } from '../models/todo.model';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  
  editando:boolean = false;

  chkCompletado : FormControl;
  txtInput      : FormControl;

  constructor(private store: Store<AppState> )  {
    this.todo = { id: 0, texto: '', completado: false };
    this.chkCompletado = new FormControl;
    this.txtInput = new FormControl;
    
   }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado )
    this.txtInput = new FormControl( this.todo.texto, Validators.required )
    this.chkCompletado.valueChanges.subscribe( valor => {
        this.store.dispatch( actions.toggle({id: this.todo.id}) )
    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      // this.txtInputFisico.nativeElement.focus();
      this.txtInputFisico.nativeElement.select();
    }, 2);

  }

  terminarEdicion() {
    this.editando = false;
  }

}
