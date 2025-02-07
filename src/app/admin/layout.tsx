'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const navConfig = [
    {
        name: 'Venues',
        href: '/admin/venues',
    },
    {
        name: 'Shows',
        href: '/admin/shows',
    },
    {
        name: 'Artists',
        href: '/admin/artists',
    },
];

const selectedNavStyles = 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white';
const unselectedNavStyles = 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white';

export default function Layout({ children }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const selectedPage = navConfig.find((navItem) => navItem.href === pathname);
    return (
        <div>
            <h3 className="text-2xl">Admin Page</h3>
            <div>
                <nav className="flex space-x-4">
                    {navConfig.map((navItem) => (
                        <Link 
                            className={selectedPage?.name === navItem.name ? selectedNavStyles : unselectedNavStyles} 
                            href={navItem.href} 
                            key={navItem.href}
                        >
                            {navItem.name}
                        </Link>
                    ))}
                </nav>
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
            {children}
        </div>
    );
}