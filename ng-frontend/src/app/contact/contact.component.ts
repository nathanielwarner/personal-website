import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ContactSubmissionService } from "../contact-submission.service";
import { ContactSubmission } from "../contact-submission";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submissionAttempted: boolean = false;
  submissionSuccessful: boolean = false;

  constructor(private contactSubmissionService: ContactSubmissionService) {}

  ngOnInit(): void {}

  submitForm(f: NgForm) {
    if (f.valid) {
      this.contactSubmissionService.submit({
        name: f.value.nameInput as string,
        email: f.value.emailInput as string,
        message: f.value.messageInput as string
      } as ContactSubmission)
        .subscribe(
          (value) => {
            this.submissionAttempted = true;
            this.submissionSuccessful = true;
          },
          (error) => {
            this.submissionAttempted = true;
            this.submissionSuccessful = false;
          });
    }
  }

}
