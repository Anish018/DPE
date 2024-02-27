import { Component, HostListener, AfterViewInit } from '@angular/core';
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
  
  constructor() {
    // Debounce the scroll event to wait until the scrolling has finished
    this.scrollEvents.pipe(debounceTime(100)).subscribe(() => this.highlightCurrentSection());
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.highlightCurrentSection();
    }, 0);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollEvents.next();
  }

  scrollToSection(sectionId: string) {
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

  private highlightCurrentSection() {
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
