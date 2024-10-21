'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React, { useState } from 'react'; // Import useState

const Navbar = () => {
    const pathName = usePathname();
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter()

    const Links = [
        {
            title: "About",
            path: '/about',
        },
        {
            title: "Posts",
            path: '/posts',
        },
        {
            title: "Meals",
            path: '/meals'
        },
        {
            title: "Gallery",
            path: '/gallery'
        }
    ];

    const handlar = () => {
        setIsClicked(!isClicked); // Toggle the clicked state
        router.push("/login")
    };
    if (pathName.includes("dashboard"))
        return <div className='bg-green-400'>Dashboard Layout </div>
    return (
        <nav className='bg-red-500 px-6 py-4 flex justify-between items-center text-white '>
            <h6 className='text-3xl'>Next <span className='text-cyan-300'>Hero</span></h6>
            <ul className='flex justify-between items-center space-x-4 '>
                {
                    Links.map((link) => (
                        <Link
                            className={`${pathName === link.path && "text-cyan-500"}`}
                            key={link.path}
                            href={link.path}
                        >
                            {link.title}
                        </Link>
                    ))
                }
            </ul>
            <button
                onClick={handlar}
                className={`text-white p-4 ${isClicked ? 'bg-cyan-500' : 'bg-transparent'} `}
            >
                Login
            </button>
        </nav>
    );
};

export default Navbar;
