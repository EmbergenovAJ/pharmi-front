import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

const Hamkor = () => {
    return (
        <div>
            <Card className="w-64">
                <CardHeader floated={false} className="h-40">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="paragraph" color="blue-gray" className="mb-2">
                        Hamkor nomi
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Hamkor;