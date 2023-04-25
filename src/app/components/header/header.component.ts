import { Component } from "@angular/core"
import { UiService } from "src/app/services/ui.service"
import { Subscription } from "rxjs"

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
	title = "Task Tracker"
	showAddTask!: boolean
	subscription!: Subscription

	constructor(private uiService: UiService){
		this.subscription = this.uiService.onToggle().subscribe(isShown => {
			this.showAddTask = isShown
		})
	}

	toggleAddTask() {
		this.uiService.toggleAddTask()
	}
}
