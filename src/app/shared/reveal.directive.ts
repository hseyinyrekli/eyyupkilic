import { Directive, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Öğe ekranda görünür olduğunda `in` sınıfı ekler (fade + kaydırma).
 * Sunucu tarafında (SSR) veya IntersectionObserver desteklenmiyorsa
 * içerik olduğu gibi görünür kalır.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, @Inject(PLATFORM_ID) private platform: object) { }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform) || !('IntersectionObserver' in window)) return;
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    this.io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('in');
          this.io?.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
