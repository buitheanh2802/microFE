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
import { TodosService } from './services/todos.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [
        TodoItemComponent,
        SearchItemComponent,
        LogoComponent,
        InputTextModule,
        // FloatLabel,
        // IftaLabel,
        ButtonModule
    ],
    templateUrl: './app.component.html',
    providers: [
      // TodosService,
      // HttpClient
    ]
})
export class AppComponent implements OnInit {
    constructor(
      private TodoServices: TodosService
    ) {}

    ngOnInit(): void {
      this.TodoServices.Gets().subscribe(value => {
        console.log(value);
      })
    }
    
    OnContentsCreateChange(event: Event): void{
      const value = (event.target as HTMLInputElement).value;
      // this.TodoContents = value;
    }

    OnCreateTodo(){
      
    }

    OnEditTodo(content: string){
      console.log(content);
    }

}
