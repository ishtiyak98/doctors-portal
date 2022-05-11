import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      className="card lg:max-w-lg  bg-base-100"
    >
      <figure className="pt-8">
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-semibold text-center">{service.title}</h2>
        <p className="text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
