import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Task }  from '../models/task';
import { TaskComponent } from '../components/tasks/task/task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: AngularFireList<any>;
  selectedTask:  Task= new Task();

  constructor(private firebase: AngularFireDatabase) {}

  getTasks(){
    this.taskList=this.firebase.list('tasks');
    return this.taskList;
  }

  insertTask(task: Task){
    this.taskList.push({
      name: task.name,
      location: task.location,
      hours: task.hours
    });
  }

  updateTask(task:Task){
    this.taskList.update(task.$key,{
      name: task.name,
      location: task.location,
      hours: task.hours
    })
  }

  deleteTask($key:string)
  {
    this.taskList.remove($key);
  }
}
