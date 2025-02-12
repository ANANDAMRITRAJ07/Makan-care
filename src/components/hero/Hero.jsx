import './Hero.css'
import img_1 from '../../assets/pic5.png';
import img_2 from '../../assets/pic6.png';
import img_3 from '../../assets/small.png';
const Hero = () => {
  return (
    <div>
    <section className="hero">
      <div className="hero-main">
        <div className="hero-content">
          <p className="sale-text">Big Saving Days Sale</p>
          <h1>Electrician Service at Makan Care</h1>
          <p className="price">Starting at only <span>$59.00</span></p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
        <div className="hero-image">
          <img src={img_1} alt="Electrician Service" />
        </div>
      </div>
      
      <div className="hero-side">
        <div className="service-box">
          <img src={img_2} alt="Bathroom Cleaning" />
          <div className="service-info">
            <h3>Bathroom Cleaning</h3>
            <p className="price">$129.00</p>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
        <div className="service-box">
          <img src={img_2} alt="Kitchen Cleaning" />
          <div className="service-info">
            <h3>Kitchen Cleaning</h3>
            <p className="price">$129.00</p>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
        <div className="service-box">
          <img src={img_2} alt="Bathroom Cleaning" />
          <div className="service-info">
            <h3>Bathroom Cleaning</h3>
            <p className="price">$129.00</p>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
        <div className="service-box">
          <img src={img_2} alt="Kitchen Cleaning" />
          <div className="service-info">
            <h3>Kitchen Cleaning</h3>
            <p className="price">$129.00</p>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
      </div>

      <div className="service-gallery">
        <img src={img_3} alt="Service 1" />
        <img src={img_3} alt="Service 2" />
        <img src={img_3} alt="Service 3" />
        <img src={img_3} alt="Service 4" />
        <img src={img_3} alt="Service 5" />
        <img src={img_3} alt="Service 6" />
      </div>
    </section>
    </div>
  )
}

export default Hero
