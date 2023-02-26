import {Todo} from "./todo.interface";

export interface ModalResult {
  update?: boolean,
  create?: boolean,
  todo: Todo
}
