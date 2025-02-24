import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { TodoResponseType } from 'types/response.type';
import { TodoRequestParams } from 'types/request.type';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    private API_URL: string = 'https://67ad6b5b3f5a4e1477dd9b5a.mockapi.io/api/v1/Todos';

    constructor(private Http: HttpClient) {}

    public Gets(params: TodoRequestParams = {
        page: 1,
        limit: 5
    }): Observable<Array<TodoResponseType>> {
      return this.Http.get<Array<TodoResponseType>>(this.API_URL,{
        params: params,
        headers: {
            'Content-Type': 'application/json'
        }
      });
    }

    public Post(data: TodoResponseType): Observable<any>{
        return this.Http.post(this.API_URL,data,{
            headers: {
                'Content-type': 'application/json'
            },
        })
    }

    public Put(data: any){
        return this.Http.put(this.API_URL,data,{
            headers: {
                'Content-type': 'application/json'
            },
        })
    }

    public Delete(id: string){
        // return this.Http.delete(this.API_URL,data,{
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // })
    }


}
