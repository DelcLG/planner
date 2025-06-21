// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar'; // On importe notre nouveau composant

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinPlan - Votre Planificateur Financier',
  description: 'Gérez votre budget, calendrier et épargne.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar /> {/* La sidebar est ici */}
          <main className="flex-grow p-8 overflow-auto">
            {children} {/* Le contenu de la page active sera injecté ici */}
          </main>
        </div>
      </body>
    </html>
  );
}