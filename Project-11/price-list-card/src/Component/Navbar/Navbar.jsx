/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Services", "path": "/services" },
        { "id": 4, "name": "Contact", "path": "/contact" },
        { "id": 5, "name": "Products", "path": "/products" }
    ]
    return (
        <nav className='bg-purple-500'>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span>{open===true ?
                <XMarkIcon className='h-6 w-6 text-purple-500'/>
                :<Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>
            <ul className={`md:flex absolute bg-purple-500 md:static duration-500 ${open ? 'top-6':'-top-48'}`}>

                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;