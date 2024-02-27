import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbModule, ContactUsComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  autoSlide = false;

  @ViewChild('myCarousel', { static: false }) myCarousel?: NgbCarousel;
  @ViewChild('carousel', { static: false, read: ElementRef }) private carousel?: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamic import of HammerJS
      import('hammerjs').then(Hammer => {
        if (this.carousel) {
          const hammerInstance = new Hammer.default(this.carousel.nativeElement);
          hammerInstance.get('swipe').set({ direction: Hammer.default.DIRECTION_HORIZONTAL });

          hammerInstance.on('swipeleft', () => {
            if (this.myCarousel) {
              this.myCarousel.next();
            }
          });

          hammerInstance.on('swiperight', () => {
            if (this.myCarousel) {
              this.myCarousel.prev();
            }
          });
        }
      }).catch(error => console.error('Error importing HammerJS:', error));
    }
  }
  listItems = [
    'ENTRY/EXIT',
    'CLUBHOUSE',
    'GRAND GATEWAY / DROP OFF',
    'WELCOME GREENS',
    'MIYAWAKI FOREST',
    'PERFORMANCE PLAZA',
    'REFLEXOLOGY GARDEN',
    'COMMUNITY OPEN SPACE',
    'KIDS PLAY ZONE',
    'SPORTS ZONE',
    'VISITOR PARKING BAY',
    'PODIUM LANDSCAPE',
    'FITNESS PARK',
    'THEMED GARDEN',
    'PERIPHERAL LANDSCAPE',
    'PODIUM VEHICULAR ENTRY',
    'PREMIUM TOWERS',
    'MILLENNIUM TOWER',
    'PRESIDENTIAL TOWERS',
    'VILLAMENTS',
    'BASEMENT RAMP',
    'SURFACE PARKING - 140',
  ];
}
