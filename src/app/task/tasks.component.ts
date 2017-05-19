import {Component, OnInit} from "@angular/core";
import {Task} from "./task";
import {TaskService} from "../services/task.service";
import {TaskStatusEnum} from "../ts/status";
/**
 * Created by n_ngo on 2017/05/02.
 */



@Component({
  selector: "my-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["../assets/css/tasks.component.css"]
})
export class TasksComponent implements OnInit{
  private tasks:Task[];
  private taskSelected;
  private taskStatus;
  constructor(private taskService:TaskService){
    this.taskStatus = TaskStatusEnum;
  }
  ngOnInit():Promise<Task[]>{
    return this.taskService.getTasks().then(tasks => this.tasks = tasks);

  }
  taskClick(task:Task):void{
    this.taskSelected = task;
  }
  changeStatus(task:Task):void{
    let index:number = 0;
    for (index; index <this.tasks.length; index++){
      if(this.tasks[index]===task){
        if(task.status == this.taskStatus.processing)
        {
          task.status = this.taskStatus.done;
        }
        else
        {
          task.status = this.taskStatus.processing;
        }
        this.taskService.update(task).then();
        this.tasks[index] = task;
      }
    }
  }


}
