import React, {useCallback, useState} from 'react';
import Logo from '../assets/logo.png'
import {Drawer} from "./drawer/index.jsx";
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);

    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <div className="p-3 flex items-center justify-between">
            <Link to='/'>
            <div className="flex items-center">
                
                <img className='w-16' src={Logo}  alt="logo"/>
                <div className="text-mds ml-2 font-medium font-text">
                    Toshkent <br />
                    Farmatsevtika <br />
                    Instituti
                </div>
            </div>
            </Link>
            <div>
                <div className="App">
                    <button type="button" onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                    <Drawer anchor="right" open={open} onClose={handleClose}/>
                </div>
            </div>
            {/*<div>*/}
            {/*    <ul className="flex items-center text-md uppercase gap-6">*/}
            {/*        <li>Institut</li>*/}
            {/*        <li>Faoliyat</li>*/}
            {/*        <li>Talaba</li>*/}
            {/*        <li>Abituriyent</li>*/}
            {/*        <li>Yangiliklar</li>*/}
            {/*        <li>Qabul 2024</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}



        </div>
    );
};

export default Header;