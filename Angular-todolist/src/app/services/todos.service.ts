import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    private API_URL: string =
        'https://67ad6b5b3f5a4e1477dd9b5a.mockapi.io/api/v1/Todos';

    constructor(private Http: HttpClient) {}

    public Gets() {
      return this.Http.get(this.API_URL);
    }
}
