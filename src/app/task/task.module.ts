/**
 * Created by n_ngo on 2017/05/15.
 */
import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TasksComponent} from "./../task/tasks.component";
import {TaskService} from "./../task/task.service";
import {TaskDetailComponent} from "./../task/task-detail/task-detail.component";
import {TaskStatus} from "./../ts/status";
import {TaskPriority} from "./../ts/priority";


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TasksComponent,
    TaskDetailComponent,
  ],
  providers:[TaskService,TaskStatus,TaskPriority]
})
export class TaskModule{}
