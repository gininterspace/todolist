/**
 * Created by n_ngo on 2017/04/28.
 */
import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Task} from "../task";
import {TaskService} from "../../services/task.service";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {AssigneeService} from "../../services/assignee.service";
import {Assignee, AssigneeArray} from "../../ts/assignee";

@Component({
  selector: "task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["../../assets/css/task-detail.component.css"]
})


export class TaskDetailComponent  implements OnInit{
  @Input() taskSelected ;
  private taskStatus = [];
  private taskPriority;
  private priorityIndex;
  private statusIndex;
  private assigneeData = AssigneeArray;
  private assigneeEnum = Assignee;
  private assigneeInfo = [];
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private assigneeService: AssigneeService
  ){
    this.taskStatus = TaskStatus;
    this.taskPriority = TaskPriorities;
    this.priorityIndex = TaskPriority;
    this.statusIndex = TaskStatusEnum;
  }
  closeDetail(){
      this.taskSelected.data = null;
  }
  ngOnInit():void{
    this.assigneeService.getAssignees().then(asses => this.assigneeInfo = asses);
  }
}
