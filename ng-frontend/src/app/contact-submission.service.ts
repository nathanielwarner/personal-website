import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ContactSubmission } from "./contact-submission";

@Injectable({
  providedIn: 'root'
})
export class ContactSubmissionService {

  submissionUrl = 'api/contactSubmission';

  httpOptions = {
    headers: new HttpHeaders({'Content_Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  submit(submission: ContactSubmission): Observable<any> {
    return this.http.post<any>(this.submissionUrl, submission, this.httpOptions);
  }

}
