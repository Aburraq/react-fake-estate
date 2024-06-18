import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {useNotificationStore} from "../../lib/notificationStore";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const fetch = useNotificationStore(state => state.fetch);
  const number = useNotificationStore(state => state.number);

  fetch();


  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="Fake estate logo" />
          <span>Fake <br /> Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/add">Create a Post Now</a>
        <a href="/list">See Posts</a>
        <a href="/66715f95652b964a26508fb9">Favorite Post</a>
      </div>
      <div className="right">

        {currentUser ? (<div className="user">
          <img src={currentUser.avatar || "/noavatar.png"} alt="Profile picture" />
          <span> {currentUser.username}</span>
          <Link to={"/profile"} className="profile">
          {number > 0 && <div className="notification">{number}</div>}
          <span>Profile</span>
          </Link>
        </div>): 
        ( <>
                  <a href="/login">Sign In</a>
                  <a href="/register" className="register">Sign Up</a>
          </>
        )}

        <div className="menuIcon">
          <img src="./menu.png" alt="Menu icon" onClick={() => setOpen((prev) => !prev)}/>
        </div>

        <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
        <a href="">Sign In</a>
        <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}
