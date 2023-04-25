import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  deleteIcon = faTimes
  
  @Input() task!: Task
  @Output() onDelete: EventEmitter<Task["id"]> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  public deleteEmitter(id: Task["id"]){
    this.onDelete.emit(id)
  }

  public reminderEmitter(task: Task){
    this.onToggleReminder.emit(task)
  }
}
