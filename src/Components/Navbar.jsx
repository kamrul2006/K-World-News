import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        < div className="flex justify-between items-center  mx-10 my-5">
            <div></div>

            {/* ---------links--------------------- */}
            <div className="flex gap-5 text-sm text-gray-400 w-fit mx-auto">
                <Link to={"/"} className="hover:underline hover:text-red-400">Home</Link>
                <Link className="hover:underline hover:text-red-400">About us</Link>
                <Link className="hover:underline hover:text-red-400">Career</Link>
            </div>

            {/* -----------log in------------------ */}
            <div className="flex  items-center gap-2 login">
                <img src="https://img.icons8.com/3d-fluency/50/user-male-circle.png" className="w-10" />
                <Link to={'/auth/login'} className="bg-blue-500 hover:bg-blue-400 px-5 py-1 rounded-lg text-white text-sm">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;