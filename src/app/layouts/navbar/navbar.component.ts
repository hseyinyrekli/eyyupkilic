import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;

  constructor(private elementref: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.elementref.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  setClass() {
    return this.isScrolled ? 'isScrolled' : '';
  }

  closeMenu() {
    document.getElementById('navbarSupportedContent2')?.classList.remove('show');
  }

  closeMenu1() {
    this.closeMenu();
  }
}
