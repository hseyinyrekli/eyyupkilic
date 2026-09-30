import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [NavbarComponent, FooterComponent, LayoutsComponent],
    imports: [CommonModule, RouterModule, NgOptimizedImage, TranslateModule],
})
export class LayoutsModule { }
