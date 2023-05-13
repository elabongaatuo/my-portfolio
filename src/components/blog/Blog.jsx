import React from 'react';
import "./blog.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const Blog = () => {
    return (
      <section className="blog container section" id="blog">
          <h2 className="section__title">My articles</h2>
          <span className="section__subtitle">I write sometimes</span>
          <Swiper className="blog__container"
                  loop = {true}
                  grabCursor={true}
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 48,
                    },
                  }}
                  modules={[Pagination]}
                  >
            {Data.map(({id, image, title,description,link, pubDate}) => {
              return(
              <SwiperSlide className="blog__card" key={id}>
                  <img src={image} alt=""
                  className="blog__img" />
                  <h3 className="blog__name">{title}</h3>
                  <p className="blog__description">{description}</p>
                  <a href={link} className="blog__subtitle" target="_blank" rel="noreferrer" ><b>read more</b></a>
                  <h4 className="blog__subtitle"><i>{pubDate}</i></h4>
                 

              </SwiperSlide>
              )
            })}
          </Swiper>
      </section>
    );
  };
  
  export default Blog