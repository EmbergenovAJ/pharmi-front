import {Outlet} from "react-router-dom";
import List from "../../components/Layout/InstitutePageSideBar.jsx";


const links = [
    {
        name: 'Yangiliklar',
        link: 'news'
    },
    {
        name: 'E`lon',
        link: 'push'
    },
    {
        name: 'Tadbirlar',
        link: 'news'
    },
    {
        name: 'Yangiliklar',
        link: 'news'
    },

]

const NewsLayout = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-2xl rounded-none px-4 2xl:px-0 py-2 lg:px-8 lg:py-4">
                <div className="grid grid-cols-4">
                    <div className='col-span-4 lg:col-span-3 lg:px-4'>
                        <Outlet/>
                    </div>
                    <div className='col-span-1 px-4'>
                        <List links={links}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLayout;