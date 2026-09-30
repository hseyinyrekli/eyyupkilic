import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as menuTurkish } from '../assets/i18n/tr';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dizayn';

  constructor(
    private translate: TranslateService,
    private seo: SeoService,
  ) {
    this.translate.setTranslation(menuTurkish.lang, menuTurkish.data, true);
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
    this.seo.init();
  }
}
