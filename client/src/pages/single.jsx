import post from "../components/post"
import Sidebar from "../components/Sidebar"
import SinglePost from "../components/SinglePost"
import "../styles/single.css"

const single = () => {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default single