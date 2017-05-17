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
        assignee: 1
      },
      {
        id: 2,
        name: "task 2 need to finish",
        desc: "take a box and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
        assignee: 0
      },
      {
        id: 3,
        name: "task 3 today",
        desc: "take a table and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 2,
        assignee: 1
      },
      {
        id: 4,
        name: "task 4 had to finish",
        desc: "take a chair and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
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
        status: 1,
        assignee: 1
      },
      {
        id: 6,
        name: "task 6 today",
        desc: "write code",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 3,
        assignee: 1
      },
      {
        id: 7,
        name: "task 7 today",
        desc: "fux big and leave ",
        created: Date.now(),
        deadline: Date.now(),
        priority: 1,
        status: 1,
        assignee: 0
      }
    ];
    let assignees = [
      {
        id: "1",
        name: "Ngo Van Nguyen",
        img: "https://garoon.intra.interspace.ne.jp/cgi-bin/cbgrn/grn.exe/grn/file_download/-/747++%E3%82%B4%E3%83%BC%E3%83%B4%E3%82%A1%E3%83%B3+%E3%82%B0%E3%82%A3%E3%83%B3.JPG?uid=581&fid=716&mime=image%2Fjpeg&hash=&.JPG",
      },
      {
        id: "2",
        name: "Shimizu san",
        img: "https://garoon.intra.interspace.ne.jp/cgi-bin/cbgrn/grn.exe/grn/file_download/-/%E6%B8%85%E6%B0%B40685.jpg?uid=474&fid=545&mime=image%2Fjpeg&hash=&.jpg",
      },
      {
        id: "3",
        name: "任 恩光",
        img: "https://garoon.intra.interspace.ne.jp/cgi-bin/cbgrn/grn.exe/grn/file_download/-/%E4%BB%BB0600.jpg?uid=354&fid=376&mime=image%2Fjpeg&hash=&.jpg",
      },
    ];
    return {tasks, assignees}

  }

}
