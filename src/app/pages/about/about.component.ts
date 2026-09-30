import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  whatWeDo = [
    { icon: 'i-pipe', t: 'ABOUT.W1_T', d: 'ABOUT.W1_D' },
    { icon: 'i-thermo', t: 'ABOUT.W2_T', d: 'ABOUT.W2_D' },
    { icon: 'i-fan', t: 'ABOUT.W3_T', d: 'ABOUT.W3_D' },
    { icon: 'i-drop', t: 'ABOUT.W4_T', d: 'ABOUT.W4_D' },
  ];
}
