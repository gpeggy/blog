"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Contact",
        path: "/contact",
    }]

const Header = () => {

    const pathname = usePathname();
    console.log(pathname);


    return (
        <header className="px-12 py-6 bg-slate-800" id="peggy">
            <div className="flex items-center justify-between ml-10 ">
                <div className="text-3xl font-bold font-sans text-indigo-400">P e g g y ' s</div>
                <div className="flex gap-[50px] mr-8 text-2xl text-white">
                {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path} className={`${link.path === pathname && "text-indigo-400 border-b-2 border-indigo-400"} capitalize font-medium hover:text-indigo-400 transition-all`}>
                        {link.name}
                    </Link>
                )
            })} </div>                
            </div>
            
        </header>
    )
}

export default Header
