import {Component, OnInit} from "@angular/core";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Task} from "../task";
import {TaskService} from "../../services/task.service";


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
    constructor(private taskService:TaskService){
      this.priorities = TaskPriorities;
      this.priority_index = TaskPriority;
      this.status = TaskStatus;
      this.status_index = TaskStatusEnum;
      this.task_holder = new Task;

    }
    ngOnInit(){
    }

    addTask(data:Task){
      data.status = 1;
      data.created= Date.now();
      data.deadline= Date.now();
      console.log(data);
      this.taskService.create(data).then();
    }



}
