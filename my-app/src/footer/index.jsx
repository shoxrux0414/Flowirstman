import React from "react";
import "./style.css"
import apple from "../img/apple.png"
import pay from "../img/pay.png"
import color from "../img/4.png"
import mir from "../img/mir.png"
import paypal from "../img/paypal.png"
import qiwi from "../img/qiwi.png"
import youtube from "../img/youtube.png"
import whatsapp from "../img/whatsapp.png"
import telegram from "../img/telegram.png"
import instagram from "../img/instagram.png"
import tiktok from "../img/tik-tok.png"
import p from "../img/p.png"
import sberbank from "../img/sberbank.png"
import visa from "../img/visa.png"
import webmoney from "../img/web money.png"



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__cards">
                    <div className="footer__cards-card">
                        <h3 className="card__title">Информация</h3>
                        <p className="card__txt">О нас</p>
                        <p className="card__txt">Доставка</p>
                        <p className="card__txt">Политика безопасности</p>
                        <p className="card__txt">Условия соглашения</p>
                    </div>
                    <div className="footer__cards-card">
                        <h3 className="card__title">Каталог</h3>
                        <p className="card__txt">Цветы</p>
                        <p className="card__txt">Подарки</p>
                        <p className="card__txt">Фруктовые корзины</p>
                        <p className="card__txt">Воздушные шарики</p>
                        <p className="card__txt">Комнатные растения</p>
                        <p className="card__txt">Сладости</p>
                        <p className="card__txt">Услуги</p>
                        <p className="card__txt">Аксессуары</p>
                    </div>
                    <div className="footer__cards-card">
                        <h3 className="card__title">Личный кабинет</h3>
                        <p className="card__txt">Личный кабинет</p>
                        <p className="card__txt">Корзина</p>
                    </div>
                    <div className="footer__cards-card">
                        <h3 className="card__title">Адрес</h3>
                        <p className="card__txt">г. Москва</p>
                        <p className="card__txt">Доставка</p>
                    </div>
                    <div className="footer__cards-card">
                        <h3 className="card__title">Телефоны</h3>
                        <p className="card__num">+7 968 765-70-07</p>
                        <p className="card__num">+7 925 965-70-07</p>
                        <h3 className="card__link">По любым вопросам</h3>
                        <p className="card__num">info@floristman.ru</p>
                    </div>
                </div>
                <div className="footer__logo">
                    <div className="footer__first-logo">
                        <img src={apple} alt="" className="footer__img" />
                        <img src={pay} alt="" className="footer__img" />
                        <img src={color} alt="" className="footer__img" />
                        <img src={mir} alt="" className="footer__img" />
                        <img src={paypal} alt="" className="footer__img" />
                        <img src={qiwi} alt="" className="footer__img" />
                        <div className="footer__second-logo">
                            <img src={p} alt="" className="footer__img" />
                            <img src={sberbank} alt="" className="footer__img" />
                            <img src={visa} alt="" className="footer__img" />
                            <img src={webmoney} alt="" className="footer__img" />
                        </div>
                    </div>
                    <div className="footer___second-logo">
                        <img src={youtube} alt="" className="footer__img" />
                        <img src={whatsapp} alt="" className="footer__img" />
                        <img src={telegram} alt="" className="footer__img" />
                        <img src={instagram} alt="" className="footer__img" />
                        <img src={tiktok} alt="" className="footer__img" />
                    </div>
                </div>
                <p className="footer__text">FloristMan © 2022</p>
            </div>
        </footer>
    )
}

export default Footer;