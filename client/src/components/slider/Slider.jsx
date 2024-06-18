import { useState } from "react";
import "./slider.scss";

export default function Slider({images}) {

    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        direction === "left" 
        ? 
        (imageIndex === 0 ? (setImageIndex(images.length-1)) : (setImageIndex(imageIndex-1))) 
        : 
        (imageIndex === images.length-1 ? (setImageIndex(0)) : (setImageIndex(imageIndex+1))) 
    }


  return (
    <div className="slider">
        { imageIndex !== null &&
        <div className="fullSlider">
            <div className="arrow">
                <img src="./arrow-left.png" alt="Arrow Icon" onClick={() => changeSlide("left")}/>
            </div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="Photo of the house" />
            </div>
            <div className="arrow">
                <img src="./arrow-left.png" className="right" alt="Arrow icon" onClick={() => changeSlide("right")} />
            </div>

            <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
        }
        <div className="bigImage">
            <img src={images[0]}  alt="Photo of the house" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                <img key={index} src={image} alt="Photo of the house" onClick={() => setImageIndex(index+1)} />
            ))}
        </div>
    </div>
  )
}
