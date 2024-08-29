import React, {Suspense} from 'react';
import Top from "../Top.jsx";
import Header from "../Header.jsx";
import {ToastContainer} from "react-toastify";
import Spinner from "../Spinner.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Top />
            <div>
                <Header/>
                <Suspense fallback={<Spinner />}>
                    <ToastContainer />
                    <Outlet />
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;