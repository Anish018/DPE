import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent implements OnInit {
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private location: Location,
    private router: Router, // Inject Router instead of Location
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Disha Habitat | Cookie Policy');
    this.metaService.updateTag({ name: 'description', content: 'Cookie Policy' });
  }
goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
