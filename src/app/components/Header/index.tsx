import { nav } from '@/app/data/nav';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Header = () => {
    return (
        <div className='md:w-1/2 md:sticky top-0 max-h-screen md:py-16 py-4 flex flex-col justify-between'>
            <div>
                <h1>Pongsiri Suwannasilp</h1>
                <h2>Full Stack Developer</h2>
                <div className='inline-flex items-center justify-center bg-teal-400/10 text-teal-300 mt-2 px-2 py-1 rounded-md'>
                    <MdOutlineMail className='mr-2' />
                    <div>pongsiri.suwannasilp@gmail.com</div>
                </div>
                <div className='text-slate-500 hidden md:flex flex-col mt-4 gap-1'>
                    {nav.map((navItem) => (
                        <div key={navItem.linkUrl}>
                            <Link href={navItem.linkUrl} className='hover:text-white w-auto inline-flex'>
                                {navItem.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-lightWhite mt-4 text-2xl flex items-center gap-3'>
                <Link href="https://github.com/ipxz-p" target="_blank"><FaGithub /></Link>
                <Link href="https://www.linkedin.com/in/pongsiri-suwannasilp-a586641b5/" target="_blank">
                    <FaLinkedin />
                </Link>
                <Link href="https://www.instagram.com/ipxz_p/" target="_blank">
                    <FaInstagram />
                </Link>
            </div>
        </div>
    );
};

export default Header;