import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { PageHeadComponent } from '../shared/page-head.component';
import { RevealDirective } from '../shared/reveal.directive';
import { TranslateModule } from '@ngx-translate/core';

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projelerimiz',
    component: ProjectsComponent,
  },
  {
    path: 'hakkimizda',
    component: AboutComponent,
  },
  {
    path: 'referanslarimiz',
    component: ReferencesComponent,
  },
  {
    path: 'galeri',
    component: GalleryComponent,
  },
  {
    path: 'iletisim',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [
    PageHeadComponent,
    RevealDirective,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    GalleryComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  providers: [],
  // <model-viewer> tarayıcıda dinamik olarak yüklenen bir web component'tir (ana sayfa).
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
