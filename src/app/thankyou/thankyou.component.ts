import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Import Location
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss'] // Corrected styleUrl to styleUrls
})
export class ThankyouComponent {
  constructor(private location: Location) { } // Inject Location service

  // Method to navigate back
  goBack(): void {
    this.location.back();
  }
}
