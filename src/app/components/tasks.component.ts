import {Component, OnInit} from "@angular/core";
import {Task} from "../ts/task";
import {TaskService} from "../services/task.service";
/**
 * Created by n_ngo on 2017/05/02.
 */


@Component({
  selector: "my-tasks",
  templateUrl: "../template/tasks.component.html",
  styleUrls: ["../assets/css/tasks.component.css"]
})
export class TasksComponent implements OnInit{
  private tasks:Task[];
  private taskSelected;
  private currentCSSClasses:{};
  constructor(private taskService:TaskService){}
  ngOnInit():Promise<Task[]>{
    this.setCSSClasses();
    return this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  taskClick(task:Task):void{
    this.taskSelected = task;
  }
  setCSSClasses():void{
    this.currentCSSClasses = {
      "task-list":true
    };
  }
  taskDone(task:Task):void{
    let index:number = 0;
    for (let t of this.tasks){
      if(t===task){
        if(task.status == 1)
          task.status = 0;
        else
          task.status = 1;
        this.tasks[index] = task;
      }
      index++;
    }
  }


}
