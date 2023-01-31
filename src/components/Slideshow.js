import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: '../images/slide-img1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '../images/slide-img2.jpg',
    caption: 'Slide 2'
  },
  {
    url: '../images/slide-img3.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <div className="slide-container__left">
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              {/* <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              </div> */}
              <img src={slideImage.url} alt={slideImage.caption} />
            </div>
          ))}
        </Fade>
      </div>
      <div className="slide-container__right">
        <a href="$">
          <div
            style={{
              backgroundImage: "url('./images/img-size-l/sr-01.png')",
              backgroundSize: "cover",
              height: "49%"
            }}
          ></div>
        </a>
        <a href="$">
          <div
            style={{
              backgroundImage: "url('./images/img-size-l/m_bn_2_2.jpg')",
              backgroundSize: "cover",
              height: "49%"
            }}
          ></div>
        </a>
      </div>
    </div>
  );
}
export default Slideshow;