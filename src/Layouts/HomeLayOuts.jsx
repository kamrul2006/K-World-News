import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Home/LeftAside";
import RightAside from "../Home/RightAside";


const HomeLayOuts = () => {
    return (
        <div className="font-Pop">
            {/* -----------------------------heading part------------------------- */}
            <div className="bg-slate-50">
                <Header></Header>
            </div>
            <div className="px-24 bg-gray-200 p-2">
                <LatestNews></LatestNews>
            </div>
            <div className="">
                <Navbar></Navbar>
            </div>

            {/* ---------------------------main lay out------------------------- */}
            <div className="grid md:grid-cols-12 gap-3 px-10 mt-10">
                {/* ----------left nav bar---------------- */}
                <aside className="col-span-2">
                    <LeftAside></LeftAside>
                </aside>

                {/* --------main content------------------- */}
                <section className="col-span-8">
                    <Outlet></Outlet>
                </section>

                {/* -------------- right side---------------- */}
                <aside className="col-span-2">
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default HomeLayOuts;