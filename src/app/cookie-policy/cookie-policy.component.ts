import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent {
  constructor(
    private location: Location,
    private router: Router, // Inject Router instead of Location
  ) {}
goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
