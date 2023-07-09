import "./Image.css";
import React from 'react';
import img from "./Image_programmin.png";

export default function Image() {
  return (
    <div className='imgcontainer'>
      <img src={img} alt="1" size="cover"></img>
    </div>
  )
}
