import { Component } from '@angular/core';
import { PROJECTS } from 'src/app/core/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = PROJECTS;
}
