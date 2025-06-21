// app/components/Sidebar.tsx

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// On définit ici les liens de notre menu
const navLinks = [
  { name: 'Budget', href: '/budget', icon: '💰' },
  { name: 'Calendrier', href: '/calendrier', icon: '🗓️' },
  { name: 'Épargne', href: '/epargne', icon: '🏦' },
];

export default function Sidebar() {
  const pathname = usePathname(); // Hook pour savoir sur quelle URL on est

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white p-4 flex flex-col">
      <div className="text-2xl font-bold mb-10 text-center">
        <Link href="/">FinPlan</Link>
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.name} className="mb-2">
                <Link
                  href={link.href}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white' // Style si le lien est actif
                      : 'hover:bg-gray-700' // Style au survol
                  }`}
                >
                  <span className="mr-3 text-xl">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}