import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  api = "https://cardiacfunction.herokuapp.com/getresult"
  getResult(formData: FormData): Observable<any>{
    return this.httpClient.post(this.api,formData)
  }
}
