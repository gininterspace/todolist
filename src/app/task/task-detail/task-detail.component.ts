/**
 * Created by n_ngo on 2017/04/28.
 */
import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Task} from "../task";
import {TaskService} from "../../services/task.service";
import {TaskStatus} from "../../ts/status";
import {TaskPriorities, TaskPriority} from "../../ts/priority";

@Component({
  selector: "task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["../../assets/css/task-detail.component.css"]
})


export class TaskDetailComponent  implements OnInit{
  @Input() task_selected : Task;
  taskStatus = [];
  taskPriority;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
  ){
    this.taskStatus = TaskStatus;
    this.taskPriority = TaskPriorities;
  }

  ngOnInit():void{
  }
}
