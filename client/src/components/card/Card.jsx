import "./card.scss";
import {Link} from "react-router-dom"
export default function Card({item}) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgContainer">
        <img src={item.img || item.images[0] || "./noavatar.png"} alt="Photo of the house" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
          
        <p className="address">
          <img src="/location.png" alt="Pin icon" />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>



        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bedroom.png" alt="Bedroom icon" />
              <span>{item.bedroom} Bedroom</span>
            </div>

            <div className="feature">
              <img src="/bathroom.png" alt="Bathroom icon" />
              <span>{item.bathroom} Bathroom</span>
            </div>

          </div>

          <div className="icons">
            <div className="icon">
              <img src="/save.png" color="#888" alt="Save the house" />
            </div>

            <div className="icon">
              <img src="/chat.png" alt="Chat with the owner" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
