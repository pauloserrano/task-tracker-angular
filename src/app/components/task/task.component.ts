import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() task: Task | undefined = undefined
  @Output() onDelete: EventEmitter<Task["id"]> = new EventEmitter()
  deleteIcon = faTimes

  public deleteEmitter(id: Task["id"]){
    this.onDelete.emit(id)
  }
}
