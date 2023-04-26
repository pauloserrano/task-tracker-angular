import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  name: string = ""
  description: string = ""
  reminder: boolean = false
  showAddTask!: boolean
  subscription: Subscription


  @Output() onSubmit: EventEmitter<Omit<Task, "id">> = new EventEmitter()

  constructor(private uiService: UiService) {
		this.subscription = this.uiService.onToggle().subscribe(isShown => {
			this.showAddTask = isShown
		})
  }

  public handleSubmit(){
    if (this.name.length === 0) {
      return alert("Please give your task a name")
    }
    
    this.onSubmit.emit({
      name: this.name,
      description: this.description,
      reminder: this.reminder
    })

    this.resetForm()
  }

  public resetForm() {
    this.name = ""
    this.description = ""
    this.reminder = false
  }
}
