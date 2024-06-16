import { Route, Routes, useRoutes } from "react-router-dom"
import User from "./components/User"
import Post from "./components/Post"
import ToDos from "./components/ToDos"
import NavBar from "./components/NavBar"
import SinglePost from "./components/SinglePost"

function App() {
  // first method
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavBar />,
  //     children: [
  //       {
  //         index: true,
  //         element: <User />
  //       },
  //       {
  //         path: "/posts",
  //         element: <Post />
  //       },
  //       {
  //         path: "/todos",
  //         element: <ToDos />
  //       }
  //     ]
  //   },
  //   {
  //     path: "/posts/:id",
  //     element: <SinglePost />
  //   }
  // ]);

  // return element;

  // second method
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<NavBar />}>  
          <Route index element={<User />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/todos" element={<ToDos />} />
        </Route>
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </>
  )
}

export default App
