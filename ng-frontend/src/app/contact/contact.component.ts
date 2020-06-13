import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ContactSubmissionService } from "../contact-submission.service";
import { ContactSubmission } from "../contact-submission";
import { SubmissionStatus } from "../submission-status.enum";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  subStatType = SubmissionStatus

  submissionStatus: SubmissionStatus = SubmissionStatus.None;

  constructor(private contactSubmissionService: ContactSubmissionService) {}

  ngOnInit(): void {}

  submitForm(f: NgForm) {
    if (f.valid) {
      this.submissionStatus = SubmissionStatus.InProgress;
      this.contactSubmissionService.submit({
        name: f.value.nameInput as string,
        email: f.value.emailInput as string,
        message: f.value.messageInput as string
      } as ContactSubmission)
        .subscribe(
          (value) => {
            if (value.ok) {
              this.submissionStatus = SubmissionStatus.Succeeded;
            } else {
              this.submissionStatus = SubmissionStatus.Failed;
            }
          },
          () => {
            this.submissionStatus = SubmissionStatus.Failed;
          });
    }
  }

}
