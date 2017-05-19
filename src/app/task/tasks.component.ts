import {Component, OnInit} from "@angular/core";
import {Task} from "./task";
import {TaskService} from "../services/task.service";
import {TaskStatusEnum} from "../ts/status";
import enumerate = Reflect.enumerate;
/**
 * Created by n_ngo on 2017/05/02.
 */
declare let $;


@Component({
  selector: "my-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["../assets/css/tasks.component.css"]
})
export class TasksComponent implements OnInit{
  private tasks:Task[];
  private taskSelected : Task;
  private taskStatus = TaskStatusEnum;
  constructor(private taskService:TaskService){}
  ngOnInit():void{
    this.taskService.getTasks().then((tasks:Task[]) => this.tasks = tasks as Task[]);
    $(".kanban").hide();
  }
  toggleKanban(){
    $(".kanban").toggle("blind");
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
