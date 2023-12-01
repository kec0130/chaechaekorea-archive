'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={clsx({ 'absolute left-0 top-0 z-10 w-full': isHome })}>
      <div className={clsx('container-xl py-3 md:py-5', { 'text-white': isHome })}>
        <Link href="/" className="text-xl font-bold md:text-2xl">
          ChaeChae Korea
        </Link>
      </div>
    </header>
  );
};

export default Header;
