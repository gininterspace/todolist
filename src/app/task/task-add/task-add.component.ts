import {Component} from "@angular/core";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Task} from "../task";
import {TaskService} from "../../services/task.service";
import {Location} from "@angular/common";
import {Assignee, AssigneeArray} from "../../ts/assignee";
declare let $;


@Component({
  templateUrl: "./task-add.component.html",
  styleUrls: ["../../assets/css/task-edit.component.css"]
})
export class TaskAddComponent{

  private taskHolder: Task;
  private priorities = [];
  private priorityIndex;
  private status = [];
  private statusIndex;
  private assignee;
  private assigneeEnum;
    constructor(private taskService:TaskService, private location: Location){
      this.priorities = TaskPriorities;
      this.priorityIndex = TaskPriority;
      this.status = TaskStatus;
      this.statusIndex = TaskStatusEnum;
      this.taskHolder = new Task;
      this.assignee = AssigneeArray;
      this.assigneeEnum = Assignee;

    }
    ngOnInit(){
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
        this.taskService.create(data).then(()=>this.back());
      }
    }

    back(){
      this.location.back();
    }

}
