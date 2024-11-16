import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <div className="my-5">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;