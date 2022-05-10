import React from "react";
import bannerImg from "../../assets/images/chair.png";
import MainButton from "../Shared/MainButton";

const Banner = () => {
  return (
    <section>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
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
