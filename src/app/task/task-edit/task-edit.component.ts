import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {TaskService} from "../../services/task.service";
import {Task} from "../task";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Location} from "@angular/common";
declare let $;

@Component({
  templateUrl:"./task-edit.component.html",
  styleUrls: ["./../../assets/css/task-edit.component.css"]
})
export class TaskEditComponent implements OnInit{
  private task_editing:Task;
  private taskStatus = [];
  private taskPriority = [];
  private priority_index;
  private status_index;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ){
    this.taskStatus = TaskStatus;
    this.status_index = TaskStatusEnum;
    this.taskPriority = TaskPriorities;
    this.priority_index = TaskPriority;


  }

  ngOnInit(){
    this.route.params.switchMap((params : Params)=>this.taskService.getTask(+params['id']) ).subscribe(task => {
      this.task_editing = task
    });
  }
  // start up datepicker.
  ngAfterViewChecked(){
    $("#deadline_date_picker").datepicker({
      altFormat: "yy-M-D"
    });
  }
  save(){
    if(this.task_editing.name)
    {
      this.task_editing.deadline = $("#deadline_date_picker").val(); // force to get deadline value from date-picker
      return this.taskService.update(this.task_editing).then(() => this.goBack());
    }
  }
  goBack(){
    this.location.back();
  }

}
