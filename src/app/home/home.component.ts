// home.component.ts
import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../header/header.component';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbModule, ContactUsComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Disha Habitat');
    this.metaService.updateTag({ name: 'description', content: 'Disha Habitat Homes' });
  }
  autoSlide = false;
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
