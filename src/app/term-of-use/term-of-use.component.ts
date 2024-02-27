import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-term-of-use',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './term-of-use.component.html',
  styleUrl: './term-of-use.component.scss'
})
export class TermOfUseComponent {
  constructor(
    private location: Location,
    private router: Router, // Inject Router instead of Location
  ) {}
  goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
