import {Component, Input, OnInit} from "@angular/core";
import {AssigneeService} from "../../services/assignee.service";
import {Task} from "../task";
import {Assignee,  AssigneeArray} from "../../ts/assignee";
import {TaskStatusEnum} from "../../ts/status";
import {TaskPriority} from "../../ts/priority";
/**
 * Created by n_ngo on 2017/05/16.
 */
declare let $;

@Component({
  selector: "kanban",
  templateUrl: "./kanban.component.html",
  styleUrls: ["../../assets/css/kanban.css"],
})
export class KanbanComponent implements OnInit{
  @Input() data:Task[];
  @Input() taskSelected;
  private assignees = AssigneeArray;
  private assigneesIndex  = Assignee;
  private assigneesData;
  private taskStatus = TaskStatusEnum;
  private priorityEnum = TaskPriority;
  constructor(private assigneeService: AssigneeService){}
  ngOnInit(){
    return this.assigneeService.getAssignees().then(asses => this.assigneesData = asses);
  }
  setStatus(taskId: number, status: number){
    for (let index: number = 0; index < this.data.length; index ++){
      if(this.data[index].id === taskId){
        this.data[index].status = status;
      }
    }
  }
  taskClick(task:Task):void{
    this.taskSelected.data = task;
  }



}




