import { useLoaderData } from "react-router-dom";


const MainNews = () => {

    const { data } = useLoaderData()

    if (!data.length) {
        return <p className="text-center text-3xl text-gray-500">No articles available.</p>;
    }

    return (
        <div>
            <h3 className="text-xl text-center font-semibold">K-World News Home ({data.length})</h3>

            <div>
                {/* {data.map((dat, i) => <div key={i} */}
                {/* className="mx-2 my-1 py-2 px-4 rounded-md border "> */}
                <div className="min-h-screen bg-gray-100 py-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">
                            {data.map((article) => (
                                <div
                                    key={article._id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={article.thumbnail_url}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2">{article.details.slice(0, 100)}...</p>

                                        {/* Author */}
                                        <div className="flex items-center mt-4">
                                            <img
                                                src={article.author.img}
                                                alt={article.author.name}
                                                className="w-10 h-10 rounded-full mr-4"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">{article.author.name}</p>
                                                <p className="text-xs text-gray-500">{article.author.published_date}</p>
                                            </div>
                                        </div>

                                        {/* Footer Info */}
                                        <div className="flex items-center justify-between mt-4">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${article.others_info.is_trending
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                                    }`}
                                            >
                                                {article.others_info.is_trending ? 'Trending' : 'Regular'}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                Rating: {article.rating.number} ({article.rating.badge})
                                            </span>
                                        </div>

                                        {/* Views */}
                                        <div className="mt-2 text-right text-sm text-gray-500">
                                            {article.total_view} views
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // </div>
    );
};

export default MainNews;