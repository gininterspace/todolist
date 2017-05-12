import {Component, OnInit} from "@angular/core";
import {Task} from "../task/task";
import {TaskService} from "../task/task.service";
/**
 * Created by n_ngo on 2017/05/01.
 */

@Component({
  selector:"my-dashboard",
  templateUrl: "../template/dashboard.component.html"
})
export class DashBoardComponent implements OnInit{
  task:Task[];
  constructor (private taskService: TaskService){}

  ngOnInit():void{
    this.taskService.getTasks().then(tasks => this.task = tasks.slice(0,4));
  }



}
