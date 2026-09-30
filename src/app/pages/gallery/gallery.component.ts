import { Component, HostListener } from '@angular/core';
import { GALLERY } from 'src/app/core/data';

// İnsan içeren dikey fotoğraflar, mozaikteki kısa/geniş hücrelerde
// object-fit: cover ile kırpılınca baş/yüz kesilmesin diye üstten hizalanır.
const CROP_BIAS: Record<string, string> = {
  'santiye.jpg': 'center 30%',
  'ekip.jpg': 'center 20%',
};

// Arama motorları ve ekran okuyucular için her fotoğrafa özgü açıklama.
const ALT_TEXT: Record<string, string> = {
  'gallery/1.jpg': 'Şantiyede tavan arası boru ve kanal montajı',
  'ekip.jpg': 'Kılıç Mühendislik ekibi şantiye sahasında',
  'santiye.jpg': 'Mekanik tesisat ekibi kazan dairesinde inceleme yapıyor',
  'gallery/2.jpg': 'Asma tavan üzerinde tesisat boru hattı uygulaması',
  'gallery/3.jpg': 'Şaft içinde mekanik tesisat boru döşemesi',
  'gallery/4.jpg': 'Havalandırma kanalı ve tesisat boruları montajı',
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  photos = GALLERY;
  active: number | null = null;

  position(src: string): string {
    return this.lookup(src, CROP_BIAS) ?? 'center';
  }

  alt(src: string): string {
    return this.lookup(src, ALT_TEXT) ?? 'Kılıç Mühendislik şantiye fotoğrafı';
  }

  open(i: number): void {
    this.active = i;
  }

  close(): void {
    this.active = null;
  }

  next(e?: Event): void {
    e?.stopPropagation();
    if (this.active === null) return;
    this.active = (this.active + 1) % this.photos.length;
  }

  prev(e?: Event): void {
    e?.stopPropagation();
    if (this.active === null) return;
    this.active = (this.active - 1 + this.photos.length) % this.photos.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (this.active === null) return;
    if (e.key === 'Escape') this.close();
    else if (e.key === 'ArrowRight') this.next();
    else if (e.key === 'ArrowLeft') this.prev();
  }

  private lookup(src: string, map: Record<string, string>): string | undefined {
    const key = Object.keys(map).find(k => src.endsWith(k));
    return key ? map[key] : undefined;
  }
}
