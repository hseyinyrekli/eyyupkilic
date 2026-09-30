import { Component } from '@angular/core';
import { COMPANY } from 'src/app/core/company';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  company = COMPANY;
}
