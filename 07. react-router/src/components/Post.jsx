import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function Post() {
    let [posts, setposts] = useState([]);
    let [loading, setLoading] = useState(false);
    const nevigate = useNavigate();
    let { name } = useOutletContext();

    useEffect(() => {
        console.log('useEffect Called');
        setLoading(true);
        async function getAllposts() {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts');
            let response = await data.json();
    
            setposts(response);
            setLoading(false);
        }

        getAllposts();
    }, []);


    return (
        <div>
            { !loading ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto my-10 max-h-[600px]">
                    { posts.length ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        user Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        title
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post) => {
                                        return (
                                                <tr onClick={() => {
                                                    nevigate(`/posts/${post.id}`)
                                                }} key={post.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 cursor-pointer">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {post.id}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {post.userId}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {post.title}
                                                    </td>
                                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            post Not Found or There is no posts
                        </div>
                    ) }
                </div>
            ) : (
                <div className="w-full h-lvh flex items-center justify-center">
                    {name} loading...
                </div>
            )}
        </div>
    )
}

export default Post;