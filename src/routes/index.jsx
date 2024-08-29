import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Base from "../pages/Base.jsx";
import About from '../pages/Institut/About.jsx';
import Nizom from "../pages/Institut/Nizom.jsx";
import Binolar from "../pages/Institut/Binolar.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Base/>} />
            <Route path="/institut-haqida" element={<About/>} />
            <Route path="/institut-nizomi" element={<Nizom/>} />
            <Route path="/institut-binolari" element={<Binolar/>} />
        </Route>
    </Route>
));


export default router;