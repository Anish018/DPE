import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(
    private location: Location,
    private router: Router, // Inject Router instead of Location

  ) {}
  // Renamed goBack to goToHome for clarity
  goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
