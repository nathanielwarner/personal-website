import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CodeCompletionService {

  completionUrl = 'api/codeCompletion';

  httpOptions = {
    headers: new HttpHeaders({'Content_Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCompletion(input: string): Observable<any> {
    return this.http.post<any>(this.completionUrl, {prompt: input}, this.httpOptions);
  }
}
