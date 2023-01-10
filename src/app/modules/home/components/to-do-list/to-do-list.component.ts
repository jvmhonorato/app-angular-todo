import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  public taskList: Array<TaskList> = [
    {task:"", checked: true},
    {task:"Minha nova Task 2", checked: false},
  ];

}
