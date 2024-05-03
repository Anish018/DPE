// home.component.ts
import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../header/header.component';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbModule, ContactUsComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Disha Habitat');
    this.metaService.updateTag({ name: 'description', content: 'Disha Habitat Homes' });
  }
  autoSlide = false;
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactUsComponent, {
      width: '100%',
      maxWidth: '1000px',
      height: 'auto',  // Adjust the height as needed, or remove if you prefer auto height based on content
      panelClass: 'custom-dialog-container',
      data: { showCloseButton: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The contact dialog was closed. Result:', result);
      // Optional: Handle any actions after the dialog closes
    });
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
