import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { share } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  isSubmitting = false; // Used to handle button text and state

  constructor(private snackBar: MatSnackBar) {}

  public sendEmail(event: Event) {
    event.preventDefault();
    this.isSubmitting = true; // Start submitting
    const form = event.target as HTMLFormElement;

    emailjs.sendForm('service_zfmxvya', 'template_qmbx5jy', event.target as HTMLFormElement, '6-QdLjlzl5V_YnnGJ')
      .then((result: EmailJSResponseStatus) => {
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.isSubmitting = false; // End submitting
        form.reset(); // Reset the form after successful submission

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
