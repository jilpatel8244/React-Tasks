import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function User() {
    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(false);
    let { name } = useOutletContext();

    useEffect(() => {
        console.log('useEffect Called');
        setLoading(true);
        async function getAllUsers() {
            let data = await fetch('https://jsonplaceholder.typicode.com/users');
            let response = await data.json();
    
            setUsers(response);
            setLoading(false);
        }

        getAllUsers();
    }, []);


    return (
        <div>
            { !loading ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto my-10 max-h-[600px]">
                    { users.length ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return (
                                            <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {user.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.username}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            User Not Found or There is no users
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

export default User;