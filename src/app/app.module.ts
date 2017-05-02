import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading and configuring the in-memory web api;
import {InMemoryWebApiModule } from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";


import { AppComponent } from './app.component';
import {HeroService} from "./services/hero.service";
import {AppRoutingModule} from "./modules/app-routing.module";
import {TasksComponent} from "./components/tasks.component";
import {TaskService} from "./services/task.service";
import {TaskDetailComponent} from "./components/task-detail.component";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  providers: [HeroService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }




