import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostLink from "../components/PostLink"

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        return res.json()
      })
      .then((data) => setPosts(data))
      .then((data) => (console.log(posts)))
  }, [])

  return (
    <>
      <Link to="/"><i class="arrow"></i></Link>
      <div className="center">
        <h2>All posts</h2>
        {posts.map((post) => (
          <PostLink post={post} key={post.id} />
        ))}
      </div>
    </>
  )
}

export default Posts
