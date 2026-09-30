import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LayoutsModule } from './layouts/layouts.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    AppRoutingModule,
    PagesModule,
    LayoutsModule,
    BrowserModule,
    CommonModule,
    TranslateModule.forRoot()
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
