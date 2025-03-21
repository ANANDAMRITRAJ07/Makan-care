import "./Hero.css";
import logo_site from "../../assets/logo.png";
import rocket from '../../assets/inter-logo.png';
import img_3 from "../../assets/small.png";
import Banner from "../Banner/Banner";
import Banner1 from "../Banner1/Banner1";
import cart_icon from "../../assets/cart.png";
import heart_icon from "../../assets/heart.png";
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"
import slide5 from "../../assets/slide5.png"
import slide6 from "../../assets/slide6.png"
import Banner2 from "../Banner2/Banner2";


const Hero = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-site">
          <img src={logo_site} alt="Logo" className="logo" />
        </div>
        <div className="info-column">
          <div className="top-row">
            <a href="#">Help Center</a>
            <a href="#">Order Tracking</a>
            <div className="dropdown">
              <span>English ▼</span>
            </div>
            <div className="dropdown">
              <span>USD ▼</span>
            </div>
          </div>
          <div className="bottom-row">
            <div className="search-bar">
              <input type="text" placeholder="Search products here..." />
              <button>SEARCH</button>
            </div>
            <a href="#">Login / Register</a>
            <div className="icons">
              <img src={heart_icon} alt="Wishlist" />
              <img src={cart_icon} alt="Cart" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="categories">
          <button>SHOP BY CATEGORIES ▼</button>
        </div>
        <div className="menu-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">New Arrivals</a>
          <a href="#">More</a>
        </div>
        <div className="delivery-info">
          <img src={rocket} alt="Free Delivery" />
          <span>Free International Delivery</span>
        </div>
      </div>
    </nav>
      <section className="hero">
        <div className="hero-main">
          <div className="fl-display">
            <div className="hero-content">
              {/* <p className="sale-text">Big Saving Days Sale</p>
          <h1>Electrician Service at Makan Care</h1>
          <p className="price">Starting at only <span>$59.00</span></p>
          <button className="shop-btn">SHOP NOW</button> */}
              <>
                <Banner />
              </>
            </div>
            <div className="hero-image">
              <a href="#">
                <>
                  <Banner1 />
                </>
              </a>
              <a href="#">
                <>
                  <Banner2 />
                </>
              </a>
            </div>
          </div>
          <div>
            <div className="service-gallery">
              <img src={img_3} alt="Service 1" />
              <img src={slide2} alt="Service 2" />
              <img src={slide3} alt="Service 3" />
              <img src={slide4} alt="Service 4" />
              <img src={slide5} alt="Service 5" />
              <img src={slide6} alt="Service 6" />
            </div>
          </div>
        </div>

        {/* <div className="hero-side">
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
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
