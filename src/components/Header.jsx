import { useState } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu.jsx';
import MenuButton from './BurgerMenu/MenuButton.jsx';
import { motion } from 'framer-motion';

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
}

const Header = () => {

    const [open, setOpen] = useState(false);

    // const handleClick = useCallback(() => setOpen(!open), []);

    return (
        <div className="p-3 flex items-center justify-between ">
            <Link to='/'>
                <div className="flex items-center">

                    <img className='w-16' src={Logo} alt="logo" />
                    <div className="text-mds ml-2 font-medium font-text">
                        Toshkent <br />
                        Farmatsevtika <br />
                        Instituti
                    </div>
                </div>
            </Link>
            <div className=' z-20'>
                <MenuButton isOpen={open} toggleOpen={setOpen} />
            </div>
            <motion.div className='absolute left-0 top-0 z-10 bg-[rgb(9,156,185)] bg-gradient-to-r from-[#099cb9] via-[#163c87] via-62%  to-[#090979] w-dvw h-dvh overflow-y-auto overscroll-none overflow-x-hidden'
                animate={open ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <BurgerMenu open={open} toggleOpen={setOpen} />
            </motion.div>
            {/* <div className="App">
                    <button type="button" onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Drawer anchor="right" open={open} onClose={handleClose} />
                </div> */}
            {/* <div>*/}
            {/*    <ul className="flex items-center text-md uppercase gap-6">*/}
            {/*        <li>Institut</li>*/}
            {/*        <li>Faoliyat</li>*/}
            {/*        <li>Talaba</li>*/}
            {/*        <li>Abituriyent</li>*/}
            {/*        <li>Yangiliklar</li>*/}
            {/*        <li>Qabul 2024</li>*/}
            {/*    </ul>*/}
            {/*</div> */}



        </div>
    );
};

export default Header;