import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.taskService.getTasks();
    this.resetFrom();
  }

  onSubmit(taskForm: NgForm)
  {
    if(taskForm.value.$key==null){
      this.taskService.insertTask(taskForm.value);
      this.resetFrom(taskForm);
    }else{
      this.taskService.updateTask(taskForm.value);
      this.resetFrom(taskForm);
    }
    this.toastr.success('Successful Operation','Successful Operation')

  }

  resetFrom(taskForm?: NgForm)
  {
    if(taskForm != null){
      taskForm.reset();
      this.taskService.selectedTask= new Task();
    }
  }

}
