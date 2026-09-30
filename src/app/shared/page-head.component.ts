import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-head',
  template: `
    <section class="page-head">
      <div class="container position-relative">
        <nav class="crumb" aria-label="breadcrumb">
          <a routerLink="">{{ 'MENU.HOME' | translate }}</a>
          <span>/</span>
          <span>{{ title | translate }}</span>
        </nav>
        <h1>{{ title | translate }}</h1>
        <svg class="page-head__ill" viewBox="0 0 460 200" aria-hidden="true"><use href="#ill-pipeline"></use></svg>
      </div>
    </section>
  `,
})
export class PageHeadComponent {
  @Input() title = '';
}
