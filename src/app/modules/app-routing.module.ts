import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TasksComponent} from "../task/tasks.component";
import {TaskDetailComponent} from "../task/task-detail/task-detail.component";
/**
 * Created by n_ngo on 2017/04/28.
 */
import {} from "";

const routes: Routes = [
  {path: "", redirectTo: "/tasks", pathMatch: "full"},
  {path: "tasks", component: TasksComponent},
  {path: "tasks/edit/:id", component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
