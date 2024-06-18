import { useContext } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import "./HomePage.scss";
import {AuthContext} from "../../context/AuthContext";

export default function HomePage() {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">DAYS TO BE REMEMBERED</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit facere eius temporibus illum quibusdam vitae deserunt
            numquam, inventore necessitatibus optio animi culpa sapiente
            deleniti expedita? A culpa repudiandae id vero?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>8+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>25</h1>
              <h2>Awards Winner</h2>
            </div>
            <div className="box">
              <h1>250+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.jpg" alt="Photo of an apartment" />
      </div>
    </div>
  );
}
