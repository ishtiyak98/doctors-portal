import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <>
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        className="card max-w-lg bg-base-100"
      >
        <div className="card-body">
          <p className="mb-7">{feedback.review}</p>
          <div className="card-actions justify-start">
            <div className="flex items-center">
              <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                  <img className="w-[64px]" src={feedback.img} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold">{feedback.name}</h4>
                <h5 className="">{feedback.location}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
