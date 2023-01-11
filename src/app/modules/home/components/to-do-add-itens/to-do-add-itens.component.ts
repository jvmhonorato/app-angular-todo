import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-add-itens',
  templateUrl: './to-do-add-itens.component.html',
  styleUrls: ['./to-do-add-itens.component.scss']
})
export class ToDoAddItensComponent {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList(){
    //console.log(this.addItemTaskList);

    //use trim() to no add data with empty string ""
    this.addItemTaskList = this.addItemTaskList.trim()

    //conditional to add item only if there is data in input field
    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""
    }

  }
}
