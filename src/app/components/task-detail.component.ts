/**
 * Created by n_ngo on 2017/04/28.
 */
import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Task} from "../ts/task";

@Component({
  selector: "task-detail",
  templateUrl: "../template/task-detail.component.html",
  styleUrls: ["../assets/css/task-detail.component.css"]
})


export class TaskDetailComponent {
  @Input() task_selected : Task;

}
