import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  const feedback = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people3,
    },
  ];

  return (
    <section className="pb-40 mx-5 lg:mx-16">
      <div className="flex justify-between mb-12 lg:mb-24">
        <div className="space-y-2">
          <h5 className="text-2xl font-semibold text-secondary">Testimonial</h5>
          <h1 className="text-3xl lg:text-4xl font-normal">What Our Patients Says</h1>
        </div>
        <div>
            <img className="w-[80px] lg:w-[150px]" src={quote} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
              feedback.map(feedback => <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>)
          }
      </div>
    </section>
  );
};

export default Testimonial;
