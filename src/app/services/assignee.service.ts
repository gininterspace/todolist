import {Injectable} from "@angular/core";
import {Assignee} from "../assignee/assignee";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
/**
 * Created by n_ngo on 2017/05/16.
 */

@Injectable()
export class AssigneeService{
  private assigneeURL = "api/assignees";
  constructor(private http:Http){}
  getAssignees():Promise<Assignee[]>{
    return this.http.get(this.assigneeURL).toPromise().then(response => response.json().data as Assignee[]);
  }
  getAssignee(id:number):Promise<Assignee>{
    const url = `${this.assigneeURL}/${id}`;
    return this.http.get(url).toPromise().then(ass => ass.json().data as Assignee);
  }
}
