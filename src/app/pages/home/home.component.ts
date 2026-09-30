import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PROJECTS, REFERENCES } from 'src/app/core/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection?: ElementRef<HTMLElement>;
  @ViewChild('heroModel') heroModel?: ElementRef<HTMLElement>;
  @ViewChild('marquee') marquee?: ElementRef<HTMLElement>;

  featured = PROJECTS.slice(0, 3);
  // Kesintisiz kayan şerit için liste iki kez tekrarlanır (yarı yolda sıfırlanır).
  referencesLoop = [...REFERENCES, ...REFERENCES];

  services = [
    { icon: 'i-check', t: 'HOME.TEXT2', d: 'HOME.TEXT3' },
    { icon: 'i-calendar', t: 'HOME.TEXT4', d: 'HOME.TEXT5' },
    { icon: 'i-clock', t: 'HOME.TEXT6', d: 'HOME.TEXT7' },
    { icon: 'i-users', t: 'HOME.TEXT8', d: 'HOME.TEXT9' },
  ];

  // Burada listelenen büyük ölçekli projelerin yanı sıra çok sayıda küçük/orta
  // ölçekli iş de tamamlandığı için Proje ve Şehir sayıları "+" ile açık uçlu.
  stats = [
    { value: '15+', label: 'HOME.STAT1' },
    { value: REFERENCES.length, label: 'HOME.STAT2' },
    { value: '10+', label: 'HOME.STAT3' },
  ];

  pipeSrc = 'assets/uploads/models/pipe-shelf.glb';

  private ticking = false;
  private marqueeRAF?: number;
  private marqueeDragging = false;
  private marqueeHover = false;
  private marqueeStartX = 0;
  private marqueeStartScroll = 0;

  constructor(@Inject(PLATFORM_ID) private platform: object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform)) {
      // model-viewer yalnızca tarayıcıda tanımlanır; SSR'de dokunulmaz.
      import('@google/model-viewer').catch(() => undefined);
      this.startMarquee();
    }
  }

  ngOnDestroy(): void {
    if (this.marqueeRAF) cancelAnimationFrame(this.marqueeRAF);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.ticking || !this.heroModel || !this.heroSection) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const heroH = this.heroSection!.nativeElement.offsetHeight || window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / heroH, 0), 1);
      const x = progress * 130;
      const y = progress * -80;
      const rot = progress * 8;
      const fade = 1 - progress * 0.75;
      const el = this.heroModel!.nativeElement;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
      el.style.opacity = `${fade}`;
      this.ticking = false;
    });
  }

  private startMarquee(): void {
    const el = this.marquee?.nativeElement;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduceMotion) return;
    const step = () => {
      if (!this.marqueeDragging && !this.marqueeHover) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      this.marqueeRAF = requestAnimationFrame(step);
    };
    this.marqueeRAF = requestAnimationFrame(step);
  }

  onMarqueeEnter(): void {
    this.marqueeHover = true;
  }

  onMarqueeLeave(): void {
    this.marqueeHover = false;
  }

  onMarqueePointerDown(e: PointerEvent): void {
    const el = this.marquee?.nativeElement;
    if (!el) return;
    this.marqueeDragging = true;
    this.marqueeStartX = e.clientX;
    this.marqueeStartScroll = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }

  onMarqueePointerMove(e: PointerEvent): void {
    const el = this.marquee?.nativeElement;
    if (!this.marqueeDragging || !el) return;
    el.scrollLeft = this.marqueeStartScroll - (e.clientX - this.marqueeStartX);
  }

  onMarqueePointerUp(): void {
    this.marqueeDragging = false;
  }
}
