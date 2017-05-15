import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {TaskService} from "../../services/task.service";
import {Task} from "../task";
import {TaskPriorities} from "../../ts/priority";
import {TaskStatus} from "../../ts/status";
import {Location} from "@angular/common";

@Component({
  templateUrl:"./task-edit.component.html",
  styleUrls: ["./../../assets/css/task-edit.component.css"]
})
export class TaskEditComponent implements OnInit{
  private task_editing:Task;
  private taskStatus = [];
  private taskPriority = [];
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ){
    this.taskStatus = TaskStatus;
    this.taskPriority = TaskPriorities;
  }
  ngOnInit(){
    this.route.params.switchMap((params : Params)=>this.taskService.getTask(+params['id']) ).subscribe(task => this.task_editing = task);
  }
  save(){
    return this.taskService.update(this.task_editing).then(() => this.goBack());
  }
  goBack(){
    this.location.back();
  }
}
