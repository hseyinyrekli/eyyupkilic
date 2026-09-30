import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DEFAULT_SEO, SEO, SITE_URL } from '../seo';

// Rota değişince başlık, açıklama, canonical ve Open Graph/Twitter etiketlerini
// günceller. Title/Meta servisleri SSR'de de çalışır, yani arama motorlarının
// gördüğü ilk HTML de bu değerleri içerir.
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) { }

  init(): void {
    this.apply(this.currentPath());
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.apply(this.stripSlashes(e.urlAfterRedirects)));
  }

  private currentPath(): string {
    return this.stripSlashes(this.router.url);
  }

  private stripSlashes(url: string): string {
    return url.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
  }

  private apply(path: string): void {
    const entry = SEO[path] ?? DEFAULT_SEO;
    const url = `${SITE_URL}/${path}`;

    this.title.setTitle(entry.title);
    this.setTag('description', entry.description);
    this.setTag('og:title', entry.title, 'property');
    this.setTag('og:description', entry.description, 'property');
    this.setTag('og:url', url, 'property');
    this.setTag('og:type', 'website', 'property');
    this.setTag('og:locale', 'tr_TR', 'property');
    this.setTag('og:site_name', 'Kılıç Mühendislik Mekanik & Tesisat', 'property');
    this.setTag('og:image', `${SITE_URL}/assets/uploads/logo/logo.png`, 'property');
    this.setTag('twitter:card', 'summary');
    this.setTag('twitter:title', entry.title);
    this.setTag('twitter:description', entry.description);
    this.setCanonical(url);
  }

  private setTag(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
    this.meta.updateTag({ [attr]: name, content } as any);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
