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
import { NgFor, NgIf } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TodoResponseType } from 'types/response.type';
import { ButtonModule } from 'primeng/button';

@Component({
    templateUrl: './todo.component.html',
    // styleUrl: './todo.component.scss',
    selector: 'todo-item',
    inputs: [],
    imports: [NgIf, CheckboxModule, ButtonModule],
})
export class TodoItemComponent {
    constructor() {}
    @Input() public TodoItem: TodoResponseType;
    @ViewChild('InputRef') protected InputRef: ElementRef;
}
