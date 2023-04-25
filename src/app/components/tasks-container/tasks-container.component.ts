import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {}

  public handleDelete(id: Task["id"]) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id)
    })
  }

  public handleToggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTask(task.id, { reminder: task.reminder }).subscribe()
  }

  public handleAddTask(task: Omit<Task, "id">) {
    this.taskService.postTask({...task, id: this.tasks.length + 1 }).subscribe((newTask) => {
      this.tasks.push(newTask)
    })
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }
}
