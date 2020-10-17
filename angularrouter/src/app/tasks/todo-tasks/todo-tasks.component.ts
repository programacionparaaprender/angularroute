import { Component, OnInit } from '@angular/core';
/* import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component'; */
import axios from 'axios'

//const api = localStorage.getItem('URL') + 'api/actividad';
//const api = 'https://localhost:44382/' + 'api/actividad';
const api = "http://www.programandoconrupert.com/ws/servicio-gatos.php";
@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Disparamos la acción

  public async addTask() : Promise<void> {
    try{
      let response = await fetch(api);
      let data = await response.json()
      alert(JSON.stringify(data));
      
    }catch(error){
      alert(error);
    }
  }
}
