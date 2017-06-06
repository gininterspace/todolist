import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by n_ngo on 2017/05/02.
 */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      {
        id: 1,
        name: "task 1 today",
        desc: "take a pen and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 2,
        assignee: 2
      },
      {
        id: 2,
        name: "task 2 need to finish",
        desc: "take a box and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 2,
        status: 1,
        assignee: 0
      },
      {
        id: 3,
        name: "task 3 today",
        desc: "take a table and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 3,
        status: 2,
        assignee: 2
      },
      {
        id: 4,
        name: "task 4 had to finish",
        desc: "take a chair and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 0,
        status: 1,
        assignee: 0
      },
      {
        id: 5,
        name: "task 5 today",
        desc: "take a chair and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 4,
        assignee: 2
      },
      {
        id: 6,
        name: "task 6 today",
        desc: "write code",
        created: Date.now(),
        deadline: Date.now(),
        priority: 2,
        status: 3,
        assignee: 2
      },
      {
        id: 7,
        name: "task 7 today",
        desc: "fux big and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 3,
        status: 1,
        assignee: 0
      }
    ];
    let assignees = [
      {
        id: "1",
        name: "Ngo Van Nguyen",
        img: "https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=120,dh=120,da=s,ds=s,cw=120,ch=120,cc=FFFFFF)/assets/images/1648204/original/82dd34e3-a31d-4573-b2f9-4ab7aba914af.png?1495791312",
      },
      {
        id: "2",
        name: "Shimizu san",
        img: "https://graph.facebook.com/1171698564/picture?height=120&width=120",
      },
      {
        id: "3",
        name: "任 恩光",
        img: "https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=120,dh=120,da=s,ds=s,cw=120,ch=120,cc=FFFFFF)/assets/images/479166/original/c83ad8fd-4e43-48ce-9e10-d9b90d30ccaa.jpeg?1468628783",
      },
    ];
    return {tasks, assignees}

  }

}
