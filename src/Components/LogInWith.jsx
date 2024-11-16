import { FaGoogle, FaGithub } from "react-icons/fa";

const LogInWith = () => {
    return (
        <div>
            <h3 className="text-lg   mb-4 font-semibold">login with</h3>
            <div>
                <button className="border-2 border-blue-500 rounded-full w-full my-1 py-1 text-xs font-semibold text-blue-500 flex items-center justify-center gap-2 hover:bg-blue-100">
                    <FaGoogle />  Login with google
                </button>
                <button className="border-2 border-black rounded-full w-full my-2 text-xs py-1  flex items-center justify-center gap-2 font-semibold hover:bg-gray-200">
                    <FaGithub />
                    Login With GitHub
                </button>
            </div>

        </div>
    );
};

export default LogInWith;