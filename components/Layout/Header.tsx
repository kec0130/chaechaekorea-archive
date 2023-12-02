'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from './constants';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={clsx({ 'absolute left-0 top-0 z-10 w-full': isHome })}>
      <div className={clsx('container-xl py-3 md:py-5', { 'text-white': isHome })}>
        <nav className="flex justify-between">
          <Link href="/" className="text-xl font-bold md:text-2xl">
            ChaeChae Korea
          </Link>
          <ul className="flex items-center">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className="px-4 py-2 font-semibold uppercase transition-colors hover:text-slate-400"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
