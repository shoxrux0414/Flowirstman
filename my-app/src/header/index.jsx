import React from "react";
import "./style.css"
import Floristman from "../img/Floristman 2.png"
import banner from "../img/banner.png"
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__top">
          <nav className="header__top-nav">
            <Link to="/contact">
              <a href="" className="header__top-link">Контакты</a>
            </Link>
            <Link to="/aboutUs">
              <a href="" className="header__top-link">О нас</a>
            </Link>
            <a href="" className="header__top-link">Доставка</a>
            <a href="" className="header__top-link">Политика безопасности</a>
            <a href="" className="header__top-link">Условия соглашения</a>
          </nav>
          <button className="header__top-btn">Личный кабинет</button>
        </div>
        <div className="header__info">
          <img src={Floristman} alt="" className="header__info-img" />
          <div className="header__info-ishon">
            <div className="header__info-add">
              <div className="header__info-nav">Адрес магазина</div>
              <div className="header__info-loc">г. Москва</div>
            </div>
            <div className="header__info-link">
              <div className="header__info-nav">Главный офис</div>
              <div className="header__info-num">+7 968 765-70-07</div>
            </div>
          </div>
        </div>
        <div className="header__dev">
          <nav className="header__dev-nav">
            <a href="#" className="header__dev-link">Цветы</a>
            <a href="#" className="header__dev-link">Подарки</a>
            <a href="#" className="header__dev-link">Фруктовые корзины</a>
            <a href="#" className="header__dev-link">Воздушные шарики</a>
            <a href="#" className="header__dev-link">Комнатные растения</a>
            <a href="#" className="header__dev-link">Сладости</a>
            <a href="#" className="header__dev-link">Услуги</a>
            <a href="#" className="header__dev-link">Аксессуары</a>
          </nav>
        </div>
        <div className="header__banner">
          <img src={banner} alt="" className="header__banner-img" />
        </div>
      </header>
    </div>
  );
}

export default Header;