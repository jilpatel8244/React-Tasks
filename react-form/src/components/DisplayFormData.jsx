import { useNavigate } from "react-router-dom";

function DisplayFormData() {
    const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));

  let list = [];

  for (const [key, value] of Object.entries(user)) {
    list.push(
      <tr
        key={key}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {key}
        </th>
        <td className="px-6 py-4">{value ? value : "-"}</td>
      </tr>
    );
  }

  function deleteUserFromLocalStorage () {
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div>
      <div>
        <button onClick={deleteUserFromLocalStorage} className="px-5 py-2 bg-blue-500 text-white">delete User</button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-[50%] text-left mx-auto text-sm rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Propertise
              </th>
              <th scope="col" className="px-6 py-3">
                Values
              </th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayFormData;
