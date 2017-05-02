import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Task} from "../ts/task";
/**
 * Created by n_ngo on 2017/05/02.
 */


@Injectable()
export class TaskService{
  private taskUrl = "api/tasks";
  constructor(private http:Http){}
  getTasks():Promise<Task[]>{
    return this.http.get(this.taskUrl).toPromise().then(response => response.json().data as Task[]);
  }
  getTask(id:number):Promise<Task>{
    const url = `${this.taskUrl}/${id}`;
    return this.http.get(url).toPromise().then(response =>response.json().data as Task);
  }


}
