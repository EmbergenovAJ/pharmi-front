import {List} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const InstitutePageSideBar = (props) => {

console.log(props);

    return (
        <div>
            <div>
                <List>
                    {
                        props.links.map(link => {
                            return (
                                <Link to={link.link} key={link.link}>
                                    {link.name}                                
                                </Link>
                            )
                        })
                    }

                </List>
            </div>
        </div>

    );
};

export default InstitutePageSideBar;