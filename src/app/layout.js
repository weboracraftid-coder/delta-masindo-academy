import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'LPK DELTA MASINDO ACADEMY | Pelatihan Kerja & Pengembangan Kompetensi',
  description: 'LPK DELTA MASINDO ACADEMY menyediakan program pelatihan kerja terapan untuk meningkatkan keterampilan, kompetensi, dan kesiapan menghadapi dunia industri.',
  keywords: ['LPK', 'Pelatihan Kerja', 'Sertifikasi Kompetensi', 'Kursus Vokasi', 'Administrasi Perkantoran', 'Digital Marketing', 'Barista', 'Desain Grafis'],
  authors: [{ name: 'LPK DELTA MASINDO ACADEMY' }],
  openGraph: {
    title: 'LPK DELTA MASINDO ACADEMY | Pelatihan Kerja & Pengembangan Kompetensi',
    description: 'Bekali diri Anda dengan keterampilan terapan dan sertifikasi kompetensi di LPK Delta Masindo Academy.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'LPK DELTA MASINDO ACADEMY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
