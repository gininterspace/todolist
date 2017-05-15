/**
 * Created by n_ngo on 2017/04/28.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TasksComponent} from "../task/tasks.component";
import {TaskEditComponent} from "../task/task-edit/task-edit.component";
import {TaskAddComponent} from "../task/task-add/task-add.component";

const routes: Routes = [
  {path: "", redirectTo: "/tasks", pathMatch: "full"},
  {path: "tasks", component: TasksComponent},
  {path: "tasks/edit/:id", component: TaskEditComponent},
  {path: "add", component: TaskAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
