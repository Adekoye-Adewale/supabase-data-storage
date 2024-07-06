'use client'
import React, { useEffect, useState } from 'react'
import Close from '@/icons/close'
import Hamburger from '@/icons/hamburger'

export default function MenuIcons() {

    const [ open, setOpen ] = useState(false);

    // useEffect(() => {
    //     setOpen(false);
    // }, []);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div onClick={handleToggle}>
            {open ? <Close /> : <Hamburger />}
        </div>
    )
}
