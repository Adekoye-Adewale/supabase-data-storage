import React from 'react';
import SiteLogo from './logo';
import NavMessage from './navMessage';
import NavMenu from './navMenu';
import MobileMenu from './mobileMenu';

export default function SiteHeader() {

    return (
        <header>
            <div 
                className="flex justify-between items-center p-4 bg-gray-800 text-white"
            >
                <SiteLogo />
                <div className='hidden sm:flex'>
                    <NavMenu/>
                </div>
                <div className='hidden sm:flex'>
                    <NavMessage/>
                </div>
                <div className='sm:hidden flex'>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    );
}