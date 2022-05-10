import React from "react";
import treatmentImg from "../../assets/images/treatment.png";
import MainButton from "../Shared/MainButton";

const Treatment = () => {
  return (
    <section className="pb-40 lg:px-20 mx-5 lg:mx-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7">
        <div className="flex px-7 justify-center">
          <img className="rounded-xl w-full " src={treatmentImg} alt="" />
        </div>
        <div className="flex items-center">
          <div className="space-y-7 lg:space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Exceptional Dental Care, on Your Terms</h1>
            <p className="text-lg text-justify">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem Ipsumis that it has a more-or-less normal
                distribution of letters,as opposed to using 'Content here, content
                here', making it look like readable English. Many desktop publishing
                packages and web page
            </p>
            <div>
                <MainButton>Get started</MainButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
//lg:w-9/12