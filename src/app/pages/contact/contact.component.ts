import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { COMPANY } from 'src/app/core/company';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  company = COMPANY;
  mapOpen = false;
  mapEmbedUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    // API anahtarı gerektirmeyen, adres sorgusuna dayalı Google Haritalar gömme adresi.
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(this.company.address) + '&output=embed';
    this.mapEmbedUrl = sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showMap(): void {
    this.mapOpen = true;
  }
}
