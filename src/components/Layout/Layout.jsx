import { Suspense } from 'react';
import Top from "../Top.jsx";
import Header from "../Header.jsx";
import { ToastContainer } from "react-toastify";
import Spinner from "../Spinner.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer.jsx";
import Map from '../map/map.jsx';

const Layout = () => {
    return (
        <div>
            <Top />
            <div className='asdasd'>
                <Header />
                <Suspense fallback={<Spinner />}>
                    <ToastContainer />
                    <Outlet />
                </Suspense>
            </div>
            <Map />
            <Footer />
        </div>
    );
};

export default Layout;