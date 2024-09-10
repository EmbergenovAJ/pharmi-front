import {Button, Card, Carousel} from "@material-tailwind/react";

import img1 from "../assets/123.jpg";
import img2 from "../assets/1234.jpg";
import PostCard from "../components/PostCard.jsx";
import Fakultet from "../components/Fakultet.jsx";
import Hamkor from "../components/Hamkor.jsx";

import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon, InformationCircleIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const Base = () => {
    return (
        <div>
            <div className='relative'>
                <div>
                    <Carousel loop={true} autoplay={true} className='max-h-[550px] overflow-hidden brightness-50'>
                        <img
                            src={img1}
                            alt="image 1"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src={img2}
                            alt="image 2"
                            className="h-full w-full object-cover object-center"
                        />
                    </Carousel>
                </div>
                <div className="absolute w-full top-40 text-white">
                    <h1 className='uppercase font-display font-bold text-center text-5xl'>Toshkent farmatsevtika
                        instituti</h1>
                    <p className='font-body text-lg text-center w-5/6 my-4 mx-auto font-medium '>
                        Toshkеnt farmatsеvtika instituti O`zbеkiston Rеspublikasi Sog`liqni saqlash
                        xalq komissariatining 155-son buyrug`i bilan 1937-yil 16-iyulda tashkil qilingan.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-4 text-center text-lg font-display font-medium text-white bg-blue-700'>
                <div className='border-x p-6'>
                    <h2 className='text-2xl'>3600+</h2>
                    <h3 className='uppercase'>talaba</h3>
                </div>
                <div className='border-x p-6'>
                    <h2 className='text-2xl'>4</h2>
                    <h3 className='uppercase'>fakultet</h3>
                </div>
                <div className='border-x p-6'>
                    <h2 className='text-2xl'>18</h2>
                    <h3 className='uppercase'>Kafedra</h3>
                </div>
                <div className='border-x p-6'>
                    <h2 className='text-2xl'>260+</h2>
                    <h3 className='uppercase'>professor va o`qituvchi </h3>
                </div>
            </div>

            <section className='my-5 md:my-14'>
                <div className='flex items-center justify-between'>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                    <h2 className='uppercase text-center my-6 font-display text-xl font-medium'>Yangiliklar</h2>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-2 md:p-10'>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <Button variant='outlined' size='lg'>
                        Barcha yangiliklar
                    </Button>
                </div>
            </section>

            <section className='my-5 md:my-14'>
                <div className='flex items-center justify-between'>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                    <h2 className='uppercase text-center my-6 font-display text-xl font-medium'>Interaktiv
                        xizmatlar</h2>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-2 md:p-10 lg:px-52'>
                    <Link to='https://hemis.pharmi.uz' target="_blank">
                    <Card className="text-center hover:-translate-y-0.5 items-center p-10 justify-between text-blue-600">
                       <RectangleStackIcon className="size-3/5" />

                        HEMIS.pharmi.uz
                    </Card>
                    </Link>
                    <Link to='https://student.pharmi.uz' target="_blank">
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">
                    <AcademicCapIcon className="size-3/5" />
                        STUDENT.pharmi.uz
                    </Card>
                    </Link>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">
                        <InformationCircleIcon className="size-3/5" />
                        EDO.ijro.uz
                    </Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">Moodle.pharmi.uz</Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">E-Kutubxona (library-pharmi.uz)</Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">E-xizmatlar</Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">phd.mininnovatsion.uz</Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">dcs.pharmi.uz</Card>
                    <Card className="cursor-pointer hover:-translate-y-0.5 text-center items-center p-10 justify-between text-blue-600">unisys.pharmi.uz</Card>
                </div>
            </section>

            <section>
                <div className='flex items-center justify-between'>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                    <h2 className='uppercase text-center my-6 font-display text-xl font-medium'>Dars jadvali</h2>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-2 md:p-10 lg:px-52'>
                    <Card className="text-lg font-bold uppercase mx-auto p-16 cursor-pointer text-blue-600 hover:text-blue-gray-400">1 kurs</Card>
                    <Card className="text-lg font-bold uppercase mx-auto p-16 cursor-pointer text-blue-600 hover:text-blue-gray-400">2 kurs</Card>
                    <Card className="text-lg font-bold uppercase mx-auto p-16 cursor-pointer text-blue-600 hover:text-blue-gray-400">3 kurs</Card>
                    <Card className="text-lg font-bold uppercase mx-auto p-16 cursor-pointer text-blue-600 hover:text-blue-gray-400">4 kurs</Card>
                    <Card className="text-lg font-bold uppercase mx-auto p-16 cursor-pointer text-blue-600 hover:text-blue-gray-400">5 kurs</Card>
                </div>
            </section>

            <section>
                <div className='flex items-center justify-between'>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                    <h2 className='uppercase text-center my-6 font-display text-xl font-medium'>Fakultetlar</h2>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>

                </div>
                <p className='text-center mb-6 font-display text-xl'>
                    Bizning fakultet va yo`nalishlar bo`yicha kerakli ma`lumotlarni oling.
                </p>
                
                    <Fakultet/>
                    
            </section>

            <section>
                <div className='flex items-center justify-between'>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>
                    <h2 className='uppercase text-center my-6 font-display text-xl font-medium'>Hamkorlar</h2>
                    <div className='border border-blue-gray-200 w-2/5 mx-auto'></div>

                </div>
                <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 p-2 md:p-10 lg:px-52 '>
                    <Hamkor />
                    <Hamkor />
                    <Hamkor />
                    <Hamkor />
                    <Hamkor />
                    <Hamkor />
                </div>

            </section>


        </div>
    );
};

export default Base;