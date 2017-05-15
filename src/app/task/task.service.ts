import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Task} from "./task";
import 'rxjs/add/operator/toPromise';
/**
 * Created by n_ngo on 2017/05/02.
 */


@Injectable()
export class TaskService{
  private taskUrl = "api/tasks";
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http){}
  getTasks():Promise<Task[]>{
    return this.http.get(this.taskUrl).toPromise().then(response => response.json().data as Task[]);
  }
  getTask(id:number):Promise<Task>{
    const url = `${this.taskUrl}/${id}`;
    return this.http.get(url).toPromise().then(response =>response.json().data as Task);
  }
  update(task:Task):Promise<Task>{
    const url = `${this.taskUrl}/${task.id}`;
    return this.http.put(url, JSON.stringify(task),{headers: this.headers} ).toPromise().then(()=>task)
  }
  create(task:Task):Promise<Task>{
    return this.http.put(this.taskUrl, JSON.stringify(task), {headers: this.headers}).toPromise()
      .then(res => res.json().data as Task);
  }
  getTaskFast(id:number):Promise<Task>{
    return this.getTasks().then(tasks => tasks.find(task => task.id === id));
  }
}
