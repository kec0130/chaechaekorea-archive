import clsx from 'clsx';
import Link from 'next/link';
import { categories } from './constants';
import { CloseIcon } from '@/public/icons';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={clsx(
          'fixed right-0 top-0 z-40 h-full w-64 translate-x-full transform bg-gray-100 text-gray-700 shadow-lg transition-transform duration-500',
          { 'translate-x-0': isOpen },
        )}
      >
        <div className="p-4">
          <div className="flex justify-end p-2">
            <button
              aria-label="close sidebar"
              className="cursor-pointer p-1"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon className="fill-current" />
            </button>
          </div>
          <ul className="flex flex-col items-center">
            {categories.map((category) => (
              <li key={category} className="w-full">
                <Link
                  href={`/category/${category}`}
                  className="inline-block w-full p-2 text-center font-semibold uppercase transition-colors hover:text-slate-400"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        aria-label="drawer overlay"
        className={clsx('pointer-events-none fixed inset-0 -z-10 transition-all', {
          'pointer-events-auto z-30 bg-gray-900/80 backdrop-blur': isOpen,
        })}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Drawer;
