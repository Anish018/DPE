// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dpe';
  showCookieConsent: boolean = false;

  ngOnInit(): void {
    this.checkCookieConsent();
  }

  checkCookieConsent(): void {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showCookieConsent = true;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookieConsent', 'true');
    this.showCookieConsent = false;
  }
}
