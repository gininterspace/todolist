import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading and configuring the in-memory web api;
import {InMemoryWebApiModule } from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./modules/app-routing.module";
import {TasksComponent} from "./task/tasks.component";
import {TaskService} from "./services/task.service";
import {TaskDetailComponent} from "./task/task-detail/task-detail.component";
import {TaskStatus} from "./ts/status";
import {TaskEditComponent} from "./task/task-edit/task-edit.component";
import {TaskAddComponent} from "./task/task-add/task-add.component";
import {KanbanComponent} from "./task/kanban/kanban.component";
import {AssigneeService} from "./services/assignee.service";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskAddComponent,
    KanbanComponent
  ],
  providers:[TaskService, AssigneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }




