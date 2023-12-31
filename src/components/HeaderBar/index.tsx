import HeaderSearchBar from '@/components/SearchBar/HeaderSearchBar';
import Image from 'next/image';

export default function HeaderBar() {
  return (
    <div className="w-full flex items-center justify-between my-8">
      <a
        href="/"
        className="flex items-center h-8 border border-[#DEE4E9] rounded-full px-4 text-sm"
      >
        <Image
          className="mr-2"
          width={16}
          height={16}
          src="/assets/icons/home.svg"
          alt=""
        />
        Home
      </a>
      <HeaderSearchBar />
    </div>
  );
}
