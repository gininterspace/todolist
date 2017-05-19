import {Component} from "@angular/core";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Task} from "../task";
import {TaskService} from "../../services/task.service";
import {Location} from "@angular/common";
declare let $;


@Component({
  templateUrl: "./task-add.component.html",
  styleUrls: ["../../assets/css/task-edit.component.css"]
})
export class TaskAddComponent{

  private taskHolder: Task;
  private priorities = TaskPriorities;
  private priorityIndex = TaskPriority;
  private statusIndex = TaskStatusEnum;
    constructor(private taskService:TaskService, private location: Location){
      this.taskHolder = new Task;
    }
      ngAfterViewChecked(){
      $("#deadline_date_picker").datepicker();
    }
    addTask(data:Task){
      if(data.name)
      {
        data.status = this.statusIndex.waiting;
        data.created= Date.now();
        data.deadline = $("#deadline_date_picker").val();
        console.log(data);
        this.taskService.create(data).then(()=>this.back());
      }
    }

    back(){
      this.location.back();
    }

}
