import { Component } from '@angular/core';
import { TodoItemComponent } from './components/todo-items/todo.component';
import { SearchItemComponent } from './components/search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemType } from '../types/todo.type';
import { v4 as uuid } from "uuid";

@Component({
    selector: 'app-root',
    imports: [
        TodoItemComponent,
        SearchItemComponent,
        NgFor,
        NgIf
    ],
    templateUrl: './app.component.html',
    providers: []
})
export class AppComponent {
    constructor() {}
    protected TodoContents: string;
    protected TodoContentsTest: string;
    protected TodosList: Array<TodoItemType> = [
        {
            id: '1',
            content: 'Hello world',
        },
        {
            id: '2',
            content: 'My name Bui The Anh',
        },
    ];
    
    OnContentsCreateChange(event: Event): void{
      const value = (event.target as HTMLInputElement).value;
      this.TodoContents = value;
    }

    OnCreateTodo(){
      // console.log(this.TodoContents);
      this.TodosList.push({
        content: this.TodoContents,
        id: uuid()
      })
      this.TodoContents = null;
    }

    OnEditTodo(content: string){
      console.log(content);
    }

}
