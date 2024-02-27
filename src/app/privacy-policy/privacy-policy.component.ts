import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { Meta, Title } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit{
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private router: Router, // Inject Router instead of Location

  ) {}

  ngOnInit() {
    this.titleService.setTitle('Disha Habitat | Privacy Policy');
    this.metaService.updateTag({ name: 'description', content: 'Privacy Policy' });
  }
  // Renamed goBack to goToHome for clarity
  goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
