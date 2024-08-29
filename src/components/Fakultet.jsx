import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const Fakultet = () => {
    return (
        <div>
            <Card
            shadow={false}
            className="relative grid h-64 w-full max-w-96 items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 lg:px-12">
                <Typography
                    variant="h2"
                    color="white"
                    className="mb-1 font-medium leading-[1.5]"
                >
                    Fakultet
                </Typography>
                <Typography variant="paragraph" className="mb-1 text-gray-400">
                    Tania Andrew
                </Typography>
                <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 border-white"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
            </CardBody>
        </Card>
        </div>
    );
};

export default Fakultet;