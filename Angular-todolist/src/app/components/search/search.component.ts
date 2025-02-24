import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";


@Component({
    templateUrl: './search.component.html',
    // styleUrl: './search.component.scss',
    selector: 'search-item',
    imports: [
        InputTextModule
    ]
})
export class SearchItemComponent {
    
}