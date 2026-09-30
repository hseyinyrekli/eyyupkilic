import { Component } from '@angular/core';
import { REFERENCES } from 'src/app/core/data';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references = REFERENCES;
}
