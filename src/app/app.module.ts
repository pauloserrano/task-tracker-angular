import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

/* MODULES */
import { AppRoutingModule } from "./app-routing.module"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* COMPONENTS */
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component'


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ButtonComponent,
		TaskComponent,
  	TasksContainerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
  	FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
