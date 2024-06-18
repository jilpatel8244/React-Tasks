import { Navigate, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import DisplayFormData from "./components/DisplayFormData";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLoggedIn = localStorage.getItem('user');
  console.log(isLoggedIn);

  return (
    <>
      <h1 className="text-center font-bold text-2xl my-5">React Form</h1>

      {/* protected Routes */}
      <Routes>
        {(isLoggedIn) && (<Route path="/" element={<Navigate to='/form-data' />} />)}
        <Route path="/" element={<Form />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/form-data" element={<DisplayFormData />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
