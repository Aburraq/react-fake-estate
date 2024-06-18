import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import Map from "../../components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import apiRequest from "../../lib/apiRequest.js";


export default function SinglePage() {

  const post = useLoaderData();
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(post.isSaved);


  const handleSave = async ()=>{

    setSaved((prev) => !prev);

    if(!currentUser){
      navigate("(login");
    }

    try {
      await apiRequest.post("/users/save", {postId: post.id})
    } catch (err) {
      console.log(err);
    setSaved((prev) => !prev);

    }
  }

  const handleSendMessage = () => {
    if(!currentUser) return navigate("/login");



  }


  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./location.png" alt="Location icon" />
                  <span>{post.address}</span>
                </div>
                <div className="price">
                  $ {post.price}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="User profile image" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">
              <h1>Description</h1><br />{post.postDetail.desc}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
      <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
            <img src="./utility.png" alt="Utility icon" />
            <div className="featureText">
              <span>Utilities</span>
              {
                post.postDetail.utilities === "owner" ? <p>Owner is responsible</p> : <p>Tenant is responsible</p>
              }
            </div>
          </div>

          <div className="feature">
            <img src="./pet.png" alt="Pet icon" />
            <div className="featureText">
              <span>Pet Policy</span>
              {
                post.postDetail.pet === "allowed" ? <p>Pets are allowed</p> : <p>Pets are NOT allowed</p>
              }
            </div>
          </div>

          <div className="feature">
            <img src="./fee.png" alt="Fee icon" />
            <div className="featureText">
              <span>Income Policy</span>
              <p>{post.postDetail.income}</p>
            </div>
          </div>
        </div>

        <p className="title">Room Size</p>

        <div className="sizes">
          <div className="size">
          <img src="./size.png" alt="Size icon" />
          <span>{post.postDetail.size} m2</span>
          </div>
          <div className="size">
          <img src="./bedroom.png" alt="bedroom icon" />
          <span>{post.bedroom} Beds</span>
          </div>
          <div className="size">
          <img src="./bathroom.png" alt="bathroom icon" />
          <span>{post.bathroom} Bathroom</span>
          </div>
        </div>

        <p className="title">Nearby Places</p>  

        <div className="listHorizontal">

        <div className="feature">
            <img src="./school.png" alt="school icon" />
            <div className="featureText">
              <span>School</span>
              <p>{post.postDetail.school} m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="./bus.png" alt="Pet icon" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>{post.postDetail.bus} m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="./restaurant.png" alt="Pet icon" />
            <div className="featureText">
              <span>Restaurant</span>
              <p>{post.postDetail.restaurant} m away</p>
            </div>
          </div>
        </div>

        {/* <p className="title">Location</p>  

        <div className="fuckOff">
          <Map items={[post]} />
        </div> */}


        <div className="buttons">
          <button onClick={handleSendMessage}>
            <img src="./chat.png" alt="Start the chat with the owner icon" />
            Send a Message
          </button>
          <button onClick={handleSave} style={{
            backgroundColor: saved ? "#93827F" : "#6BA292"
          }}>
            <img src="./save.png" alt="Save the place icon" />
            {saved ? "Place Saved" : "Save the Place"}
          </button>
        </div>
        </div> 
      </div>
    </div>
  )
}
