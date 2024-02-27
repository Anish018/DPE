import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-term-of-use',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './term-of-use.component.html',
  styleUrl: './term-of-use.component.scss'
})
export class TermOfUseComponent implements OnInit {
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private location: Location,
    private router: Router, // Inject Router instead of Location
  ) {}
  ngOnInit() {
    this.titleService.setTitle('Disha Habitat | Term of Use');
    this.metaService.updateTag({ name: 'description', content: 'Terms of Use' });
  }
  goToHome(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
