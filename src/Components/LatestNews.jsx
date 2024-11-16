import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2">
            <p className="bg-red-500 px-4 py-1 font-semibold text-white">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link className="mx-1">
                    Bangladesh lags behind in rooftop solar race.
                </Link>
                <Link className="mx-1">
                    Bangladesh lags behind in rooftop solar race.
                </Link>
                <Link className="mx-1">
                    Bangladesh lags behind in rooftop solar race.
                </Link>
                <Link className="mx-1">
                    Bangladesh lags behind in rooftop solar race.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;