import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container-lg py-3 md:py-5">
        <Link href="/" className="text-xl font-bold md:text-2xl">
          ChaeChae Korea
        </Link>
      </div>
    </header>
  );
};

export default Header;
