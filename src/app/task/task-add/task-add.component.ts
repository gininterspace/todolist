import {Component, OnInit} from "@angular/core";
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
export class TaskAddComponent implements OnInit{

  private task_holder: Task;
  private priorities = [];
  private priority_index;
  private status = [];
  private status_index;
  private assignee;
  private assigneeEnum;
    constructor(private taskService:TaskService, private location: Location){
      this.priorities = TaskPriorities;
      this.priority_index = TaskPriority;
      this.status = TaskStatus;
      this.status_index = TaskStatusEnum;
      this.task_holder = new Task;
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
        data.status = this.status_index.waiting;
        data.created= Date.now();
        data.deadline = $("#deadline_date_picker").val();
        this.taskService.create(data).then(()=>this.back());
      }
    }

    back(){
      this.location.back();
    }

}
