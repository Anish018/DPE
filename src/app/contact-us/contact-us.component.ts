import { Component, Inject, Optional, SkipSelf } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { share } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; // Import Router
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModuleModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  isSubmitting = false;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    @Optional() @SkipSelf() private dialogRef: MatDialogRef<ContactUsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  public sendEmail(event: Event) {
    event.preventDefault();
    this.isSubmitting = true; // Start submitting
    const form = event.target as HTMLFormElement;

    emailjs.sendForm('service_zfmxvya', 'template_qmbx5jy', form, '6-QdLjlzl5V_YnnGJ')
    .then((result: EmailJSResponseStatus) => {
      this.snackBar.open('Email sent successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      this.isSubmitting = false; // End submitting
      form.reset(); // Reset the form after successful submission
      this.closeDialog(); // Close the dialog here
      this.router.navigate(['/thankyou']); // Navigate to the thank you page

    }, (error) => {
      this.snackBar.open('Failed to send the email, please try again.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.isSubmitting = false; // End submitting
    });
}
}
