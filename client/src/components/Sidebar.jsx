import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import "../styles/sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar(){

    const[cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[]);

    return (
        <div className="sidebar">
            <div className="SidebarItem">
                <span className="SidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eius dolores necessitatibus nobis nemo dicta impedit delectus
                    sint inventore? Illo, accusantium .</p>
            </div>
            <div className="SidebarItem">
                <span className="SidebarTitle">CATEGORIES</span>
                <ul className="SidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link" >
                        <li className="SidebarListItem">{c.name}</li>
                        </Link>   
                    ))}
                    
                </ul>
            </div>
            <div className="SidebarItem">
                <span className="SidebarTitle">FOLLOW US</span>
                <div className="SidebarSocial">
                    <i className="SidebarIcons fa-brands fa-facebook-square"></i>
                    <i className="SidebarIcons fa-brands fa-twitter-square"></i>
                    <i className="SidebarIcons fa-brands fa-pinterest-square"></i>
                    <i className="SidebarIcons fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
