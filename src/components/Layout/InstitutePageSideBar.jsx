import {List, ListItem} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const InstitutePageSideBar = () => {
    return (
        <div>
            <div className=''>
                    <List className="w-full hidden lg:flex border-2 rounded-lg p-4">
                        <Link to='about'><ListItem>Institut haqida</ListItem></Link>
                        <Link to='buildings'><ListItem>O'quv binolari</ListItem></Link>
                        <Link to='institut-nizomi'><ListItem>Institut nizomi</ListItem></Link>
                        <Link to=''><ListItem>Institut pasporti</ListItem></Link>
                        <Link to='tuzilma'><ListItem>Institut tuzilmasi</ListItem></Link>
                        <Link to=''><ListItem>Normativ huquqiy hujjatlar</ListItem></Link>
                        <Link to=''><ListItem>Aloqa ma'lumotlari</ListItem></Link>
                        {/*<Link to='publicoffer'><ListItem>Публичная оферта</ListItem></Link>*/}
                    </List>
            </div>
        </div>
    );
};

export default InstitutePageSideBar;