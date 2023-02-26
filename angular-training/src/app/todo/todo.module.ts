import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import {FormsModule} from "@angular/forms";
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
