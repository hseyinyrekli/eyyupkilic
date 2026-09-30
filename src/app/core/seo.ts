// Gerçek alan adı netleşince tek satırdan güncelleyin — sitemap.xml, robots.txt
// ve canonical/OG etiketlerinin tümü bu değeri kullanır.
export const SITE_URL = 'https://www.kilicmuhendislik.com.tr';

export interface SeoEntry {
  title: string;
  description: string;
}

// Rota yolu (baştaki '/' olmadan, ana sayfa için '') → sayfaya özgü, benzersiz
// başlık ve açıklama. Her sayfanın kendi anahtar kelimeleriyle yazılmıştır.
export const SEO: Record<string, SeoEntry> = {
  '': {
    title: 'Kılıç Mühendislik Mekanik & Tesisat',
    description: 'Kılıç Mühendislik; şehir hastaneleri ve rezidans projelerinde mekanik tesisat, ısıtma-soğutma, havalandırma ve yangın tesisatı uygulamaları yürüten Samsun merkezli mühendislik firmasıdır.',
  },
  'hakkimizda': {
    title: 'Hakkımızda | Kılıç Mühendislik Mekanik & Tesisat',
    description: 'Eyyüp Kılıç ve ekibi; hastane, rezidans ve diş hastanesi projelerinde mekanik tesisat, ısıtma-soğutma ve havalandırma uygulamalarını sahada yönetir.',
  },
  'projelerimiz': {
    title: 'Projelerimiz | Kılıç Mühendislik',
    description: 'Aydın, Etlik ve Samsun şehir hastaneleri, Ankara TOBB ETÜ Hastanesi, Tekirdağ Çerkezköy Diş Hastanesi ile İzmir Alsancak ve Ankara İncek rezidans projelerinde tamamladığımız mekanik tesisat işleri.',
  },
  'referanslarimiz': {
    title: 'Referanslarımız | Kılıç Mühendislik',
    description: 'Mekatronik Mühendislik, Proda Mühendislik, Seray Grup Mekanik, EDM Grup, Arslan Mekanik ve Yağız Havalandırma başta olmak üzere birlikte çalıştığımız firmalar.',
  },
  'galeri': {
    title: 'Galeri | Kılıç Mühendislik',
    description: 'Şantiye sahalarımızdan ve ekibimizden mekanik tesisat uygulama fotoğrafları.',
  },
  'iletisim': {
    title: 'İletişim | Kılıç Mühendislik Mekanik & Tesisat',
    description: 'Mekanik tesisat projeleriniz için Kılıç Mühendislik ile iletişime geçin. Telefon numarası, adres ve konum bilgilerimiz.',
  },
};

export const DEFAULT_SEO: SeoEntry = SEO[''];
