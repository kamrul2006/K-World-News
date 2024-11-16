import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {

    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCats(data.data.news_category))
    }, [])

    // console.log(cats.data.news_category)

    return (
        <div className="flex flex-col items-center justify-center sticky top-3">
            <h3 className="text-xl text-center font-semibold">All Category ({cats.length})</h3>
            <br />
            {cats.map(cat =>
                <NavLink to={`/category/${cat.category_id}`} key={cat.category_id} className=" text-center py-2 px-5 my-2 text-gray-400  w-full rounded-xl focus:bg-slate-200 focus:text-black hover:bg-slate-50 hover:text-gray-500">
                    {cat.category_name}
                </NavLink>
            )}
        </div>
    );
};

export default LeftAside;