import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValido } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform( todos: Todo[], filtro: filtrosValido ): Todo[] {


    switch( filtro ) {

      case 'completado':
        return todos.filter( todo => todo.completado );

      case 'pendientes':
        return todos.filter( todo => !todo.completado );

      default:
        return todos;
    }


  }

}
