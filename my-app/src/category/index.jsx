import React from "react";
import "./style.css"
import { categoryData } from "./data";

const Category = () => {
    return (
        <section className="category">
            <div className="container">
                <div className="category__content">
                    {
                        categoryData.map((el) => (
                            <div className="category__content-card" key={el.id}>
                                <img src={el.image} alt={el.text} className="category__content-card-img" />
                                <button className="category__content-card-btn">
                                    {el.text}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category;