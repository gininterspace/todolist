import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params,  Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {TaskService} from "../../services/task.service";
import {Task} from "../task";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Location} from "@angular/common";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
declare let $;

@Component({
  templateUrl:"./task-edit.component.html",
  styleUrls: ["./../../assets/css/task-edit.component.css"]
})
export class TaskEditComponent implements OnInit{
  private taskEditing:Task;
  private taskStatus = TaskStatus;
  private taskPriority = TaskPriorities;
  private priorityIndex = TaskPriority;
  private statusIndex = TaskStatusEnum;
  deadlineDate: DateModel;
  datePickerOptions: DatePickerOptions;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ){
    this.datePickerOptions = new DatePickerOptions();
  }

  ngOnInit(){
    this.route.params.switchMap((params : Params)=>this.taskService.getTask(+params['id']) ).subscribe(task => {
      this.taskEditing = task
    });


  }
  save(){
    if(this.taskEditing.name)
    {
      if(this.deadlineDate)
      {
        this.taskEditing.deadline = new Date(this.deadlineDate.formatted).getTime();
      }
      return this.taskService.update(this.taskEditing).then(() => this.goBack());
    }
  }
  goBack(){
    return this.router.navigateByUrl("/");
  }

}
