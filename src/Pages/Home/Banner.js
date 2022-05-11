import React from "react";
import bannerImg from "../../assets/images/chair.png";
import MainButton from "../Shared/MainButton";

const Banner = () => {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <MainButton>Get started</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
