import { Link } from "react-router-dom";
import IGerb from "../assets/icons/uzb-gerb.png";

const Top = () => {
    return (
        <div className=' border-b border-gray-200 flex justify-center font-body text-blue-900 py-2 items-center'>
            <div className='mx-auto flex'>
                <ul className='flex gap-6'>
                    <li><Link to=''>
                        <img className='w-6' src={IGerb} alt='gerb' />
                    </Link></li>
                    <li><Link to=''>
                        <img className='w-6' src={IGerb} alt='gerb' />
                    </Link></li>
                    <li><Link to=''>
                        <img className='w-6' src={IGerb} alt='gerb' />
                    </Link></li>
                    <li><Link to=''>
                        <img className='w-6' src={IGerb} alt='gerb' />
                    </Link></li>
                </ul>
                <ul className='flex gap-4 ml-3'>
                    <li>UZ</li>
                    <li>RU</li>
                    <li>EN</li>
                </ul>


            </div>
            <div className='flex font-body font-semibold gap-3 mr-3'>
                <a target='_blank' href="tel:+998712563738">+998(71)256-37-38</a>
                <a target='_blank' href="mailto:info@pharmi.uz">info@pharmi.uz</a>
            </div>

        </div>
    );
};

export default Top;