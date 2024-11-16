import logo from "../assets/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div className="logo pt-4 flex flex-col items-center">
            <img src={logo} className="mx-auto w-1/2 md:w-96" />
            <h1 className="text-gray-400 font-semibold my-2">Journalism Without Fear or Favour</h1>
            <p className="my-2 pb-2">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div >
    );
};

export default Header;