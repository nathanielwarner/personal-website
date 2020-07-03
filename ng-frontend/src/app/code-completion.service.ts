import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeCompletionService {

  completionUrl = 'api/codeCompletion';
  summarizationUrl = 'api/codeSummarization';

  httpOptions = {
    headers: new HttpHeaders({Content_Type: 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCompletion(input: string): Observable<any> {
    return this.http.post<any>(this.completionUrl, {prompt: input}, this.httpOptions);
  }

  getSummarization(input: string): Observable<any> {
    return this.http.post<any>(this.summarizationUrl, {code: input}, this.httpOptions);
  }
}
