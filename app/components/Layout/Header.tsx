import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full">
      <div className="container-xl py-3 text-white md:py-5">
        <Link href="/" className="text-xl font-bold md:text-2xl">
          ChaeChae Korea
        </Link>
      </div>
    </header>
  );
};

export default Header;
