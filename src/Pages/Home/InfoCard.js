import React from "react";

const InfoCard = ({ icon, cardTitle, cardText, background }) => {
  return (
    <div>
      <div className={`card lg:card-side h-full p-5 shadow-xl ${background}`}>
        <figure className="px-5 pt-8 lg:pt-0">
          <img src={icon} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
