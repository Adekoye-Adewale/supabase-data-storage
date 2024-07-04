import React from 'react';
import SiteLogo from './logo';
import NavMessage from './navMessage';
import NavMenu from './navMenu';

export default function SiteHeader() {

    return (
        <header>
            <div 
                className="flex justify-between items-center p-4 bg-gray-800 text-white"
            >
                <SiteLogo />
                <NavMenu/>
                <NavMessage/>
            </div>
        </header>
    );
}