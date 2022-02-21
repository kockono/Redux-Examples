import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  editando:boolean = false;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado : FormControl;
  txtInput      : FormControl;

  constructor() {
    this.todo = { id: 0, texto: '', completado: false };
    this.chkCompletado = new FormControl;
    this.txtInput = new FormControl;
    
   }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado )
    this.txtInput = new FormControl( this.todo.texto, Validators.required )
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
