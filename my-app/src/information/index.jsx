import React from "react";
import {infoData, infoData2} from "./data"
import "./style.css"



const Information = () => {
    return (
        <section className="information">
            <div className="container">
                    <h3 className="info__title">4 веские причины выбрать нас!</h3>
                <div className="info__cards">
                    {
                        infoData.map((el) => (
                    <div className="info__cards-card" key={el.id}>
                        <img src={el.image} alt={el.text} className="info__card-img" />
                        <div className="info__card-content">
                            <h3 className="info__card-content-title">{el.title}</h3>
                            <p className="info__card-content-text">{el.text}</p>
                        </div>
                    </div>
                        ))
                    }
                </div>
                <h3 className="info__title">Как оформить заказ?</h3>
                <div className="info__cards">
                    {
                        infoData2.map((el) => (
                    <div className="info__cards-card" key={el.id}>
                        <img src={el.image} alt={el.text} className="info__card-img" />
                        <div className="info__card-content">
                            <h3 className="info__card-content-title">{el.title}</h3>
                            <p className="info__card-content-text">{el.text}</p>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Information