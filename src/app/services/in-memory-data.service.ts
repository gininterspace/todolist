import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by n_ngo on 2017/05/02.
 */

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let tasks = [
      {
        id: 1,
        name: "task 1 today",
        desc: "take a pen and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 2,
        name: "task 2 need to finish",
        desc: "take a box and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 3,
        name: "task 3 today",
        desc: "take a table and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 4,
        name: "task 4 had to finish",
        desc: "take a chair and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 5,
        name: "task 5 today",
        desc: "take a chair and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 6,
        name: "task 6 today",
        desc: "write code",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      },
      {
        id: 7,
        name: "task 7 today",
        desc: "fux big and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
      }
    ];
    return { tasks}

  }

}
