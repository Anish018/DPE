import { Component, HostListener, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = false;
  currentSection = '';
  private scrollEvents = new Subject<void>();
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Listen to scroll events directly without debounceTime
      this.scrollEvents.subscribe(() => this.highlightCurrentSection());
    }
  }
  

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.highlightCurrentSection();
      }, 0);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollEvents.next();
    }
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentSection = sectionId; // Set the current section for active styling
      this.menuOpen = false; // Close the mobile menu if it's open

      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // If there's a fixed header or other elements, you might need to adjust the scroll
        }
      }, 0);
    }
  }

  private highlightCurrentSection() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = ['home', 'about', 'feature', 'floor', 'location', 'contact'];
      const scrollPosition = window.pageYOffset;
      const headerOffset = 50; // Adjust this value based on the height of your fixed header

      let activeSectionId = '';
      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - headerOffset;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSectionId = sectionId;
            break;
          }
        }
      }

      this.currentSection = activeSectionId;
    }
  }
}
