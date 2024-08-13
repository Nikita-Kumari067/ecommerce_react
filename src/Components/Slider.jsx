import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
export default function Slider(){
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
       {
          url: "./images/fifth.png",
       },
       {
          url: "./images/first.png",
       },
       {
          url: "./images/fourth.png",
       },
       {
          url: "./images/third.png",
       },
       {
          url: "./images/second.png",
       },
    ];
    return (
       <div>
       <SimpleImageSlider
             width={1389}
             height={360}
             images={sliderImages}
             showBullets={true}
             showNavs={true}
             autoPlay={true} 
             onStartSlide = {(index, length) => {
                setImageNum(index);
             }}
                autoPlayDelay = {3}/>
         
       </div>
    );
 }
   
