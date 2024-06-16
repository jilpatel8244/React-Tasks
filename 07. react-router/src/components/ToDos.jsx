import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function ToDos() {
    let [todos, setTodos] = useState([]);
    let [loading, setLoading] = useState(false);
    let { name } = useOutletContext();

    useEffect(() => {
        console.log('useEffect Called');
        setLoading(true);
        async function getAlltodos() {
            let data = await fetch('https://jsonplaceholder.typicode.com/todos');
            let response = await data.json();
    
            setTodos(response);
            setLoading(false);
        }

        getAlltodos();
    }, []);


    return (
        <div>
            { !loading ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto my-10  max-h-[600px]">
                    { todos.length ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        completed
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map((todo) => {
                                        return (
                                            <tr key={todo.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {todo.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {todo.userId}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {todo.title}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {!todo.completed ? (
                                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                                    ) : (
                                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            todo Not Found or There is no todos
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

export default ToDos;