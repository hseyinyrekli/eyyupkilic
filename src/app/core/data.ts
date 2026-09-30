export interface Project {
  name: string;
  city: string;
  type: 'hospital' | 'residence';
  img: string;
}

export const PROJECTS: Project[] = [
  { name: 'Aydın Şehir Hastanesi', city: 'Aydın', type: 'hospital', img: 'assets/uploads/projects/aydin.jpg' },
  { name: 'Etlik Şehir Hastanesi', city: 'Ankara', type: 'hospital', img: 'assets/uploads/projects/etlik.jpg' },
  { name: 'İzmir Alsancak Rezidans', city: 'İzmir', type: 'residence', img: 'assets/uploads/projects/alsancak.jpg' },
  { name: 'Ankara TOBB ETÜ Hastanesi', city: 'Ankara', type: 'hospital', img: 'assets/uploads/projects/tobb.jpg' },
  { name: 'Tekirdağ Çerkezköy Diş Hastanesi', city: 'Tekirdağ', type: 'hospital', img: 'assets/uploads/projects/cerkezkoy.jpg' },
  { name: 'Samsun Şehir Hastanesi', city: 'Samsun', type: 'hospital', img: 'assets/uploads/projects/samsun.jpg' },
  { name: 'Ankara İncek Rezidans Projesi', city: 'Ankara', type: 'residence', img: 'assets/uploads/projects/incek.jpg' },
];

export interface Reference {
  name: string;
  logo: string;
}

export const REFERENCES: Reference[] = [
  { name: 'Mekatronik Mühendislik İnşaat', logo: 'assets/uploads/references/mekatronik.png' },
  { name: 'Proda Mühendislik', logo: 'assets/uploads/references/proda.png' },
  { name: 'Seray Grup Mekanik', logo: 'assets/uploads/references/seray.png' },
  { name: 'EDM Grup', logo: 'assets/uploads/references/edm.png' },
  { name: 'Arslan Mekanik', logo: 'assets/uploads/references/arslan.png' },
  { name: 'Yağız Havalandırma Mühendislik', logo: 'assets/uploads/references/yagiz.png' },
];

// Sıra, galeri sayfasındaki mozaik (geniş/dikey/kare) düzenle eşleşir:
// 0 geniş, 1 dikey, 2-3-5 kare, 4 geniş. İnsan içeren kareler dikey/kare
// hücrelere konur ki baş/yüz kırpılmasın; geniş hücrelere boru çekimleri konur.
export const GALLERY: string[] = [
  'assets/uploads/gallery/1.jpg',
  'assets/uploads/team/ekip.jpg',
  'assets/uploads/team/santiye.jpg',
  'assets/uploads/gallery/2.jpg',
  'assets/uploads/gallery/3.jpg',
  'assets/uploads/gallery/4.jpg',
];
