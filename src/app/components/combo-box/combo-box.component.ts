import {Component} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task';

export interface Places {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'app-combo-box',
  templateUrl: 'combo-box.component.html',
  styleUrls: ['combo-box.component.css'],
})
export class ComboBox {

  constructor(private taskService: TaskService) { }

  places: Places[] = [
    {value: 'abando-0', viewValue: 'Abando 54, 3ºB'},
    {value: 'basurto-1', viewValue: 'Basurto a Castrejana 53, 2ºC'},
    {value: 'miri-2', viewValue: 'Miribilla 12, 4º IZQ'}
  ];

  changeClient2(data){
    alert("selected --->"+this.places[data].value+' '+this.places[data].viewValue);
  }
}

