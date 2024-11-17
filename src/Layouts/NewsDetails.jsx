import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightAside from "../Home/RightAside";
import LatestNews from "../Components/LatestNews";
import { Link, useLoaderData } from "react-router-dom";


const NewsDetailsLayOut = () => {

    const data = useLoaderData();
    const News = data.data[0]
    // console.log(News)

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
            <div className="grid grid-cols-9 mx-10">
                {/* --------main content------------------- */}
                <section className="col-span-7 sticky top-4">
                    <h1 className="text-xl font-bold my-3 mx-6">K-World News</h1>

                    <div className="p-3 border-2 mx-5 my-3 rounded-lg ">
                        <div className=" my-2">
                            <img src={News.image_url} className="w-full sticky top-4" />
                        </div>
                        <div className="my-4">
                            <p className="text-4xl font-serif font-semibold mr-2 ">{News.title}</p> <br />
                            <p className="text-justify mr-2">{News.details}</p>
                            <div className="my-8">
                                <Link to={`/category/${News.category_id}`} className=" py-4 px-5 bg-red-400 hover:bg-red-500 rounded-lg text-white font-bold">
                                    See All News in this Category</Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* -------------- right side---------------- */}
                <aside className="col-span-2">
                    <RightAside></RightAside>
                </aside>

            </div>

        </div>
    );
};

export default NewsDetailsLayOut;