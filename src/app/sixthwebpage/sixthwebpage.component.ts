import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-sixthwebpage',
  templateUrl: './sixthwebpage.component.html',
  styleUrls: ['./sixthwebpage.component.css']
})
export class SixthwebpageComponent  {
 
  

  images: string[] = [
    'assets/ashokleyland.png',
    'assets/butterfly.avif',
    'assets/chettinad.jpg',
    'assets/makkaltv.jpg',
    'assets/vasanthtv.jpg',
    'assets/vijaytv.jpg',
    'assets/fronttier.jpeg',
    
    // Add more image paths as needed
  ];

  currentIndex = 0;

  nextImage() {
    const lastIndex = this.images.length - 1;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    if (this.currentIndex > lastIndex - 2) {
      this.currentIndex = lastIndex - 2;
    }
  }

  prevImage() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  
  
 }
