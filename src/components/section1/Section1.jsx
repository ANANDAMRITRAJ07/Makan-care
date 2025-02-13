import React from "react";
import "./Section1.css";
import product_img from "../../assets/small.png";

const Section1 = () => {
  return (
    <div className="second-sec">
      <div className="section-container">
        <div className="banner-container">
          <div className="banner-item orange">
            <h3>Full House Cleaning Starts at ₹2,599</h3>
            <button>Book Now</button>
          </div>
          <div className="banner-item blue">
            <h3>Plumbing Starts at Just ₹250</h3>
            <button>Book Now</button>
          </div>
          <div className="banner-item purple">
            <h3>Waxing Starts at Just ₹200</h3>
            <button>Book Now</button>
          </div>
        </div>

        <div className="categories">
          <span>Gardening</span>
          <span>Electrician</span>
          <span>Plumbing</span>
        </div>
        <div className="products-container">
          <div className="product">
            <img src={product_img} alt="Product 1" />
            <p>Multicolored Open-Knit Crewneck</p>
            <span className="price">$79.00</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 2" />
            <p>Apple Smart Watch</p>
            <span className="price">$51.04</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 3" />
            <p>Cropped Satin Bomber Jacket</p>
            <span className="price">$94.00</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 1" />
            <p>Multicolored Open-Knit Crewneck</p>
            <span className="price">$79.00</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 2" />
            <p>Apple Smart Watch</p>
            <span className="price">$51.04</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 3" />
            <p>Cropped Satin Bomber Jacket</p>
            <span className="price">$94.00</span>
          </div>
        </div>

        <div className="wall-makeover">
          <h2>Wall Makeovers</h2>
          <p>Revamp Your Space, Not Your Budget</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
