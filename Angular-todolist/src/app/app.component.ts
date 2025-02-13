import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './components/todo-items/todo.component';
import { SearchItemComponent } from './components/search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemType } from '../types/todo.type';
import { v4 as uuid } from "uuid";
import { PrimeNG } from "primeng/config";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabel } from 'primeng/floatlabel';
import { IftaLabel } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from './shareds/components/logo/logo.component';

@Component({
    selector: 'app-root',
    imports: [
        TodoItemComponent,
        SearchItemComponent,
        LogoComponent,
        InputTextModule,
        FloatLabel,
        IftaLabel,
        ButtonModule
    ],
    templateUrl: './app.component.html',
    providers: []
})
export class AppComponent implements OnInit {
    constructor(
      private primeNg: PrimeNG
    ) {}
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

    ngOnInit(): void {
      // this.primeNg.ripple.set(true)
    }
    
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
