import { Component, Input, input } from "@angular/core";
import { TodoItemType } from "../../../types/todo.type";


@Component({
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
    selector: 'todo-item',
    inputs: []
})
export class TodoItemComponent {
    // @Input() TodoItem: TodoItemType;
    TodoItem = input<TodoItemType>(null,{
        alias: 'TodoItem'
    })
    constructor(){
        console.log('Rerender');
        // console.log(this.TodoItem2);
    }
}