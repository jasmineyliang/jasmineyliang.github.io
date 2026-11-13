import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Jasmine Liang — AI Researcher | Design Preview',
  description: 'Research across simulation, perception, and production. A portfolio design preview for Jasmine Liang, PhD.',
  robots: { index: false, follow: false },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
