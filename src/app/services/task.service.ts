import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';


const httpConfig = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient){}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  public postTask(task: Task): Observable<Task> {
    console.log({ ...task })
    return this.http.post<Task>(this.apiURL, { ...task }, httpConfig)
  }

  public deleteTask(id: Task["id"]): Observable<Task> {
    return this.http.delete<Task>(`${this.apiURL}/${id}`)
  }

  public updateTask(id: Task["id"], body: Partial<Omit<Task, "id">>): Observable<Task> {
    return this.http.patch<Task>(`${this.apiURL}/${id}`, body, httpConfig)
  }
}
