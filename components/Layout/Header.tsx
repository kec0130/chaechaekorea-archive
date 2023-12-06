'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { categories } from './constants';
import { MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <header className={clsx({ 'absolute left-0 top-0 z-10 w-full': isHome })}>
        <div className={clsx('container-xl py-3 md:py-5', { 'text-white': isHome })}>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold md:text-2xl">
              ChaeChae Korea
            </Link>
            <nav className="hidden lg:block">
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

            <div className="flex items-center lg:hidden">
              <button
                aria-label="open sidebar"
                role="button"
                className="p-1"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
