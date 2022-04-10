import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./../assets/css/slider.css"

const slideImages = [
  {
    url: 'images/slide-img1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide-img2.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide-img3.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            {/* <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
            </div> */}
            <img src={slideImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow;