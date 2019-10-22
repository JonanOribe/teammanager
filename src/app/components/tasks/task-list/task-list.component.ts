import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../../services/task.service';
import { Task } from 'src/app/models/task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  taskList: Task[];

  constructor(private taskService:TaskService,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.taskService.getTasks()
    .snapshotChanges()
    .subscribe(item=>{
      this.taskList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]= element.key;
        this.taskList.push(x as Task);
      })
    });

  }

  onEdit(task: Task){
    this.taskService.selectedTask=Object.assign({},task);
  }

  onDelete($key: string){
    if(confirm('Are you sure?')){
      this.taskService.deleteTask($key);
      this.toastr.success("Delete Sucess","Product Deleted");
    }
  }

}

