import "../styles/header.css"

const header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg" alt="" className="headerImg" />
    </div>
  )
}

export default header