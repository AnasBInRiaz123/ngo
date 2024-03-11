import React from "react";
import "./style.css";
import img1 from "../../images/ngo.jpeg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Services = () => {
  return (
    <>
    <Header/>
    <div>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          <span>Our</span> Services{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img1} alt="" />
            <h3>24/7 Services</h3>
            <p>Our 24/7 services are here to ensure your help</p>
          </div>

          <div className="box">
            <img src={img1} alt="" />
            <h3>24/7 Services</h3>
            <p>Our 24/7 services are here to ensure your help</p>
          </div>

          <div className="box">
            <img src={img1} alt="" />
            <h3>24/7 Services</h3>
            <p>Our 24/7 services are here to ensure your help</p>
          </div>

          <div className="box">
            <img src={img1} alt="" />
            <h3>24/7 Services</h3>
            <p>Our 24/7 services are here to ensure your help</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};
export default Services;
