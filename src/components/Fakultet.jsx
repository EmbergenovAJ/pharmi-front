import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const arr = [
    {
        title: 'Farmatsiya',
        dekan: 'Xaydarov V.R.',
        avatarUrl: '',
        link: '/study/bachelor/facult'

    }
    ,
    {
        title: 'Sanoat Farmatsiya',
        dekan: 'Mamatqulov Z.U.',
        avatarUrl:'',
        link: '/study/bachelor/facult'

    }
    ,
    {
        title: 'Farmatsevt kadrlar malakasini oshirish va qayta tayyorlash',
        dekan: 'Usmonov U.X.',
        avatarUrl: '../assets/usmanov.jpg',
        link: '/study/bachelor/facult'

    } ,
    {
        title: 'Piter',
        dekan: 'Xashirbayeva D.M.',
        avatarUrl: '../assets/xashirbayeva.jpg',
        link: '/study/bachelor/facult'

    }
];

const Fakultet = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-2 md:p-10 lg:px-52">
            {arr.map(({title, dekan, avatarUrl, link}, key) =>(
                <Link to={link} key={key}>
                <Card
                key={key}
                shadow={false}
                className="cursor-pointer hover:-translate-y-1 relative grid items-center w-full max-w-96 justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-blue-gray-600 bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 lg:px-12">
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-1 font-medium leading-[1.5]"
                    >
                        {title}
                    </Typography>
                    <Typography variant="paragraph" className="mb-1 text-gray-400">
                        {dekan}
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt={title}
                        className="border-2 border-white"
                        src={avatarUrl}
                    />
                </CardBody>
            </Card>
                </Link>
            ))}
        </div>
    );
};

export default Fakultet;