import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient){}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  public deleteTask(id: Task["id"]): Observable<Task> {
    return this.http.delete<Task>(`${this.apiURL}/${id}`)
  }

  public updateTask(id: Task["id"], body: Partial<Omit<Task, "id">>): Observable<Task> {
    return this.http.patch<Task>(`${this.apiURL}/${id}`, body)
  }
}
