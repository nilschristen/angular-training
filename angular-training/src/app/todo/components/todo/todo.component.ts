import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo.interface";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {TodoModalComponent} from "../todo-modal/todo-modal.component";
import {ModalResult} from "../../models/modal-result.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[];
  orderBy: string = 'PRIORITY';

  constructor(private todoService: TodoService, private modal: NgbModal) {
  }

  ngOnInit(): void {
    this.setup();
  }

  private setup() {
    this.todoService.getAllTodos().subscribe((todos: Todo[]) => {
      this.todoList = todos;
      this.sortTodoList();
    });
  }

  setCompleted(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(() => this.setup());
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe((deleted: boolean) => {
      deleted ? this.setup() : console.log('something went wrong');
    });
  }

  open(modalOptions?: NgbModalOptions, id?: string) {
    const modalRef = this.modal.open(TodoModalComponent, modalOptions);
    modalRef.componentInstance.id = id;
    modalRef.result.then((modalResult: ModalResult) => {
      if (modalResult.create) {
        this.todoService.createTodo(modalResult.todo).subscribe(() => this.setup());
      } else {
        this.todoService.updateTodo(modalResult.todo).subscribe(() => this.setup());
      }
    });
  }

  // orderBy() {
  //
  // }
  sortTodoList(): Todo[] {
    if (this.orderBy === 'DATE') {
      this.todoList?.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else {
      this.todoList?.sort((a: Todo, b: Todo) => {
        const priorityOrder = {
          HIGH: 1,
          MEDIUM: 2,
          LOW: 3
        };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    }
    return this.todoList;
  }
}
