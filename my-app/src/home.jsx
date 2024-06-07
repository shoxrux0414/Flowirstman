import React from "react";
import Header from "./header";
import Discount from "./discount";
import Order from "./order";
import Information from "./information";
import Category from "./category";
import Footer from "./footer";


const Home = () => {
    return (
        <>
        <Header/>
        <Category/>
        <Discount/>
        <Order/>
        <Information/>
        <Footer/>
        </>
    )
}

export default Home;