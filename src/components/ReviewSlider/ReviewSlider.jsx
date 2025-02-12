import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./ReviewSlider.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    profilePhoto: "https://via.placeholder.com/60", // Replace with actual image
    service: "Website Development",
    review: "Amazing experience! The team was professional, and the website exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePhoto: "https://via.placeholder.com/60",
    service: "SEO Optimization",
    review: "Great results in improving search rankings! My website traffic increased significantly.",
  },
  {
    id: 3,
    name: "Robert Brown",
    profilePhoto: "https://via.placeholder.com/60",
    service: "E-commerce Development",
    review: "The online store was delivered on time with all the features I needed. Highly recommend!",
  },
  {
    id: 4,
    name: "Emily Johnson",
    profilePhoto: "https://via.placeholder.com/60",
    service: "Graphic Design",
    review: "Loved the creative designs! The branding really helped boost my business presence.",
  },
];

const ReviewSlider = () => {
  return (
    <div className="review-slider">
      <h2>Customer Reviews</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 1 }, // Tablet
          480: { slidesPerView: 1 }, // Mobile
        }}
        modules={[Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <img src={review.profilePhoto} alt={review.name} className="reviewer-img" />
              <div className="review-info">
                <h3>{review.name}</h3>
                <p className="service-taken">Service Taken: {review.service}</p>
                <p className="review-text">{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
