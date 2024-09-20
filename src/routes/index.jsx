import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Base from "../pages/Base.jsx";
import About from '../pages/Institut/About.jsx';
import Nizom from "../pages/Institut/Nizom.jsx";
import Binolar from "../pages/Institut/Binolar.jsx";
import Bachelor from "../pages/Study/Bachelor/Bachelor.jsx";
import FacultPage from "../pages/Study/Bachelor/Facult/FacultPage.jsx";
import InstitutePageLayout from "../pages/Institut/InstitutePageLayout.jsx";
import Tuzilma from "../pages/Institut/Tuzilma.jsx";
import Greeting from "../pages/Institut/Greeting.jsx";
import Docs from "../pages/Institut/Docs.jsx";
import PassInstitute from "../pages/Institut/PassInstitute.jsx";
import Contacts from "../pages/Institut/Contacts.jsx";
import StructureLayout from "../pages/Structure/StructureLayout.jsx";
import ObservConcil from "../pages/Structure/ObservConcil.jsx";
import InstituteCouncil from "../pages/Structure/InstituteCouncil.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Base/>} />
            <Route path="/study/bachelor" element={<Bachelor/>} />
            <Route path="/study/bachelor/facult" element={<FacultPage/>} />
            <Route path='/institut' element={<InstitutePageLayout/>} >
                <Route path='about' element={<About/>} />
                <Route path='buildings' element={<Binolar/>} />
                <Route path="institut-nizomi" element={<Nizom/>} />
                <Route path='tuzilma' element={<Tuzilma/>} />
                <Route path='greeting' element={<Greeting/>} />
                <Route path='docs' element={<Docs/>} />
                <Route path='pass' element={<PassInstitute/>} />
                <Route path='contacts' element={<Contacts/>} />
            </Route>
            <Route path='structure' element={<StructureLayout/>}>
                <Route path='observ' element={<ObservConcil />} />
                <Route path='council' element={<InstituteCouncil/>} />
            </Route>
        </Route>
    </Route>
));


export default router;