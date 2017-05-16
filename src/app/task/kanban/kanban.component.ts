import {Component, Input, OnInit} from "@angular/core";
import {AssigneeService} from "../../services/assignee.service";
import {Task} from "../task";
import {Assignee, AssigneeArray} from "../../ts/assignee";
import {TaskStatusEnum} from "../../ts/status";
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
  private assignees;
  private assignees_index;
  private assignees_data;
  private taskStatus;
  constructor(private assigneeService: AssigneeService){
    this.assignees = AssigneeArray;
    this.assignees_index = Assignee;
    this.taskStatus = TaskStatusEnum;
  }
  ngOnInit(){
    return this.assigneeService.getAssignees().then(asses => this.assignees_data = asses);
  }



}




