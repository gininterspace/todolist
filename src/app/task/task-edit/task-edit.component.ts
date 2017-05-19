import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params,  Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {TaskService} from "../../services/task.service";
import {Task} from "../task";
import {TaskPriorities, TaskPriority} from "../../ts/priority";
import {TaskStatus, TaskStatusEnum} from "../../ts/status";
import {Assignee, AssigneeArray} from "../../ts/assignee";
declare let $;

@Component({
  templateUrl:"./task-edit.component.html",
  styleUrls: ["./../../assets/css/task-edit.component.css"]
})
export class TaskEditComponent implements OnInit{
  private taskEditing:Task;
  private taskStatus = [];
  private taskPriority = [];
  private priorityIndex;
  private statusIndex;
  private assigneeData;
  private assigneeEnum;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.taskStatus = TaskStatus;
    this.statusIndex = TaskStatusEnum;
    this.taskPriority = TaskPriorities;
    this.priorityIndex = TaskPriority;
    this.assigneeData = AssigneeArray;
    this.assigneeEnum = Assignee;


  }


  ngOnInit(){
    this.route.params.switchMap((params : Params)=>this.taskService.getTask(+params['id']) ).subscribe(task => {
      this.taskEditing = task
    });
  }
  // start up datepicker.
  ngAfterViewChecked(){
    $("#deadline_date_picker").datepicker({
      altFormat: "yy-M-D"
    });
  }
  save(){
    if(this.taskEditing.name)
    {
      this.taskEditing.deadline = $("#deadline_date_picker").val(); // force to get deadline value from date-picker
      return this.taskService.update(this.taskEditing).then(() => this.goBack());
    }
  }
  goBack(){
    return this.router.navigateByUrl("/");
  }

}
