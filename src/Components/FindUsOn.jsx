import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div>
            <h3 className="text-lg  mb-4 font-semibold">Find us on</h3>
            <div>
                <div className="border-2 w-full rounded-xl">
                    <button className="btn btn-ghost item-center justify-start py-3 px-4  w-full gap-2 hover:bg-gray-50">
                        < FaFacebook /> facebook
                    </button><hr />
                    <button className="btn btn-ghost item-center  py-3 px-4   justify-start w-full gap-2 hover:bg-gray-50">
                        <FaInstagram /> Instagram
                    </button><hr />
                    <button className="btn btn-ghost item-center  py-3 px-4  justify-start w-full gap-2 hover:bg-gray-50">
                        <FaTwitter /> Twitter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;