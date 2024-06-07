import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { discountData } from "./data";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';


const Discount = () => {
    return (
        <section className="discout">
            <div className="container">
                <h3 className="discount__title">Акция</h3>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                   {
                   discountData.map((el) =>(
                    <SwiperSlide>
                    <div className="discount__card" key={el.id}>
                        <img src={el.image} alt={el.title} className="discount__card-img" />
                        <h3 className="discount__card-title">{el.title}</h3>
                        <p className="discount__card-price">{el.price}</p>
                        <button className="discount__card-btn">Добавить в корзину</button>
                    </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Discount