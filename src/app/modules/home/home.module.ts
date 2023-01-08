import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//components
import { HeaderComponent } from './components/header/header.component';
import { ToDoAddItensComponent } from './components/to-do-add-itens/to-do-add-itens.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

//pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoAddItensComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
