import {Component, OnInit} from "@angular/core";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Task} from "../task";
import {TaskService} from "../../services/task.service";
import {Location} from "@angular/common";
import {Assignee, AssigneeArray} from "../../ts/assignee";
import {DateModel,DatePickerOptions} from "ng2-datepicker";
import {Router} from "@angular/router";
declare let $;


@Component({
  templateUrl: "./task-add.component.html",
  styleUrls: ["../../assets/css/task-edit.component.css"]
})
export class TaskAddComponent implements OnInit{

  private taskHolder: Task;
  private priorities = TaskPriorities;
  private priorityIndex= TaskPriority;
  private status = TaskStatus;
  private statusIndex = TaskStatusEnum;
  private assignee = AssigneeArray;
  private assigneeEnum = Assignee;
  private deadlineDate:DateModel;
  private deadlineDateOptions;
    constructor(private taskService:TaskService, private location: Location, private router: Router){
      this.taskHolder = new Task;
      this.deadlineDateOptions = new DatePickerOptions();

    }
    ngOnInit(){
      this.deadlineDateOptions.initialDate = new Date(Date.now());
    }
    addTask(data:Task){
      if(data.name)
      {
        if(!data.priority)
        {
          data.priority = this.priorityIndex.Normal;
        }
        data.status = this.statusIndex.waiting;
        data.created = Date.now();
        data.deadline = new Date(this.deadlineDate.formatted).getTime();
        this.taskService.create(data).then(()=>this.goBack());
      }
    }

  goBack(){
    return this.router.navigateByUrl("/");
  }

}
