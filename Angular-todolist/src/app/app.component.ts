import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './components/todo-items/todo.component';
import { SearchItemComponent } from './components/search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { v4 as uuid } from 'uuid';
import { PrimeNG } from 'primeng/config';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { IftaLabel } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from './shareds/components/logo/logo.component';
import { TodosService } from './services/todos.service';
import { HttpClient } from '@angular/common/http';
import { TodoResponseType } from 'types/response.type';
import { TodoRequestParams } from 'types/request.type';
import {
    FormsModule,
    FormControl,
    ReactiveFormsModule,
    FormGroup,
} from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [
        TodoItemComponent,
        SearchItemComponent,
        LogoComponent,
        InputTextModule,
        TextareaModule,
        ButtonModule,
        NgFor,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './app.component.html',
    providers: [
        // FormControl
    ],
})
export class AppComponent implements OnInit {
    constructor(private TodoServices: TodosService) {}
    protected IsFetching: boolean = false;
    protected TodosList: Array<TodoResponseType> = [];
    protected TodoFormsData = new FormGroup({
        name: new FormControl(''),
        descriptions: new FormControl(''),
    });
    private TodosListRequestParams: TodoRequestParams = {
        limit: 3,
        page: 1,
    };

    ngOnInit(): void {
        this.IsFetching = true;
        this.TodoServices.Gets(this.TodosListRequestParams).subscribe({
            next: response => {
                this.TodosList = response;
                this.IsFetching = false;
            },
            error: err => {
                console.log('Error: ', err);
                this.IsFetching = false;
            },
        });
    }

    protected OnSubmit(): void{
      console.log(this.TodoFormsData.valid);
      console.log(this.TodoFormsData.value);
    }
}
