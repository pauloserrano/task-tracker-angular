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
  text: string = ""
  day: string = ""
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
    if (this.text.length === 0) {
      return alert("Add text")
    }

    if (this.day.length === 0) {
      return alert("Add day")
    }

    
    this.onSubmit.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder
    })

    this.resetForm()
  }

  public resetForm() {
    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
