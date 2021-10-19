import Slider from 'react-slick';
import './carousel.css';
import { data } from './data';
 
const Carousel = () => {
  return (
    <div className="carousel">
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
        <div className="background">
        <div className="landings">
        <h1>Rhotex Exchange</h1>
        <h6>We buy all kinds of cryptocurrencies</h6>
        <button type="submit"><a href="https://wa.me/message/BNTLTIQOWIJCC1" target="_blank" rel="noreferrer">SELL YOUR CRYPTOCURRENCY</a></button>
      </div>
            <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
