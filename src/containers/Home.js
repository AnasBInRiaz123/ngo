import React from "react";
import Carouse from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgVideo from "../images/123.mp4";

const Home = () => {
  return (
    <div className="layout">
      <div>
        <Header />
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            marginBottom: "5vmax",
          }}
          src={bgVideo}
          autoPlay
          loop
          muted
        />
      </div>

      <Carouse />
      <Footer />
    </div>
  );
};

export { Home };
