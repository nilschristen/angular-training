import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo.interface";

@Injectable({
  providedIn: 'root'
})


export class TodoService {
  BASE_URI = `http://localhost:8080/todo`

  constructor(private http: HttpClient) {
  }


  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URI}/todos`);
  }

  getAllCompletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URI}/todos/completed`);
  }
  getAllNotCompletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URI}/todos/notcompleted`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.BASE_URI}/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<void> {
    return this.http.post<void>(`${this.BASE_URI}/add`, todo);
  }

  updateTodo(todo: Todo): Observable<void> {
    return this.http.put<void>(`${this.BASE_URI}/update`, todo);
  }

  deleteTodo(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.BASE_URI}/${id}`);
  }

}
