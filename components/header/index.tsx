import { useUser } from '@/hooks/useUser';
import Link from 'next/link';
import Image from "next/image";

const Header: React.FC = () => {
  const { user, logout } = useUser();

  return (
    <header className="bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link href="/">
            <Image width={150} height={80} src={"/vodafone-logo.svg"} alt={"Vodafone"} />
          </Link>
        </div>
        <nav className="space-x-4">
          <span className="text-white">{user?.email}</span>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
