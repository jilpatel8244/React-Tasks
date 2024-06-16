import { useState, useEffect } from "react";
import Card from "./components/Card";
// import Loader from "./Loader";


function App() {
  let [posts, setPosts] = useState([]);
  let [showMore, setShowMore] = useState(false);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("inside effect");
    setLoading(true);
    async function getAllPosts() {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts');
      let response = await data.json();

      setPosts(response);
      setLoading(false);
    }

    getAllPosts();
  }, []);

  let displayPosts = (posts.length && !showMore) ? (posts.slice(0, 5)) : (posts);

  return (
    <>
      <h1 className="text-center text-5xl font-bold my-5">Posts</h1>
      {!loading && <button onClick={() => {
        setShowMore(!showMore)
      }}>{showMore ? 'Show Less' : 'Show More'}</button>}
      <div className="flex flex-wrap gap-4 justify-center">
          {!loading ? (
            displayPosts.map((post) => {
              return <Card key={post.id} {...post} />
            })
          ) : "loading ..."}
      </div>
    </>
  )
}

export default App
