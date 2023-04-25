import { Component } from '@angular/core';
import { TASKS } from 'src/app/data/mockTasks';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent {
  tasks = TASKS
}
