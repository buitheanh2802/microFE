import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { TodoItemType } from '../../../types/todo.type';
import { NgFor, NgIf } from '@angular/common';

@Component({
    templateUrl: './todo.component.html',
    // styleUrl: './todo.component.scss',
    selector: 'todo-item',
    inputs: [],
    imports: [NgIf],
})
export class TodoItemComponent implements AfterViewChecked {
    constructor() {}
    @Input() public TodoItem: TodoItemType;
    @ViewChild('InputRef') InputRef: ElementRef;
    private ShouldFocus: boolean = false;
    protected IsEditing: boolean = false;
    ngAfterViewChecked(): void {
       if(this.ShouldFocus && this.IsEditing){
        // console.log(this.InputRef.nativeElement);
        this.InputRef.nativeElement.focus();
        this.ShouldFocus = false;
       }
    }
    OnChange(event: Event): void{
        const value = (event.target as HTMLInputElement).value;
        this.TodoItem.content = value;
    }
    OnEditTodo() {
        this.IsEditing = !this.IsEditing;
        this.ShouldFocus = true;
    }
}
