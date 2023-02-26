import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo.interface";
import {TodoService} from "../../services/todo.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalResult} from "../../models/modal-result.interface";

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {
  @Input() id: string;
  activeModal: NgbActiveModal;
  todo: Todo = {} as Todo;

  constructor(private todoService: TodoService, activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
    if (this.id) {
      this.todoService.getTodo(this.id).subscribe((todo: Todo) => {
        this.todo = todo;
      });
    }
    else {
      this.todo.completed = false;
    }
  }

  createTodo() {
    let modalResult = {todo: this.todo} as ModalResult;
    this.id ? modalResult.update = true : modalResult.create = true;
    this.activeModal.close(modalResult);
  }
}
