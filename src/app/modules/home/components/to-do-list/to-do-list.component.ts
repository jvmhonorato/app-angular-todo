import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];


  // logic to put checked item below of unchecked itens
  ngDoCheck(){
    //sort to organization, turn in Number and then sort by organization
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked) )
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  //delete especific item from array
   public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
   }

   //delete all objects in array
   public deleteAllTaskList(){
    // add pop up to confirm action
    const confirm = window.confirm("Are you sure you want to delete")
    if(confirm === true){
      this.taskList = [];
    }else{

    }

   }
}
