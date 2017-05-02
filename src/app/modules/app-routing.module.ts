import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TasksComponent} from "../components/tasks.component";
/**
 * Created by n_ngo on 2017/04/28.
 */

const routes: Routes = [
  {path: "", redirectTo: "/tasks", pathMatch: "full"},
  {path: "tasks", component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
