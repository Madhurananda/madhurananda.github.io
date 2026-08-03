// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import ThemeToggle from './ThemeToggle';

// const navItems = [
//   { label: 'About', href: '/about' },
//   { label: 'Resume', href: '/resume' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Contact', href: '/contact' },
// ];

// export default function Navigation() {
//   const pathname = usePathname();

//   return (
//     <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)] backdrop-blur-sm transition-colors">
//       <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
//         <Link
//           href="/"
//           className="text-xl font-bold font-bricolage text-[var(--color-text)] hover:no-underline transition-colors"
//         >
//           Madhu Pahar
//         </Link>
//         <nav className="flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`text-base font-medium transition-colors ${
//                 pathname === item.href
//                   ? 'text-[var(--color-primary)]'
//                   : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <ThemeToggle />
//         </nav>
//       </div>
//     </header>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Bio', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)] backdrop-blur-sm transition-colors">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold font-bricolage text-[var(--color-text)] hover:no-underline transition-colors whitespace-nowrap"
        >
          Madhu Pahar
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                pathname === item.href
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}