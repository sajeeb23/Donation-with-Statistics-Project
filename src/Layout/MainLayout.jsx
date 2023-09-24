import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto py-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;