import { PostComponent } from "./Post"
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponent = posts.map(post => <PostComponent
          name={post.name}
          subtitle={post.subtitle}
          time={post.time}
          image={post.image}
          description={post.description}
          /> )

  function addPost() {
    setPosts([...posts, {
      name: "ankit",
      subtitle: "30 followers",
      time: "3m ago",
      image: "",
      description: "hello"
    }])
  }

  return (
    <div style={{background : "#dfe6e9", height: "100vh",}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent: "center"}}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )
}

export default App