import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"]
})

export class ButtonComponent {
  @Input() text = "Add"
  @Input() color = "#000"
  @Output() btnClick = new EventEmitter()

  public onClick() {
    this.btnClick.emit()
  }
}
