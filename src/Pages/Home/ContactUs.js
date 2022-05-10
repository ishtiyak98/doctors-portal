import React from "react";
import contactBG from "../../assets/images/appointment.png"

const ContactUs = () => {
  return (
    <section style={{ background: `url(${contactBG})` }} className="mb-40 py-32">
      <div >
        <div className="text-center space-y-2 mb-16">
          <h5 className="text-2xl font-semibold text-secondary">Contact Us</h5>
          <h1 className="text-3xl lg:text-4xl font-normal text-white">
            Stay Connected With Us
          </h1>
        </div>

        <div className="px-10">
            <form className="">
                <input type="text" placeholder="Email Address" class="block mx-auto input w-full max-w-lg" /> <br />
                <input type="text" placeholder="Subject" class="block mx-auto input w-full max-w-lg" /> <br />
                <textarea class="block mx-auto w-full max-w-lg textarea" rows={6} placeholder="Your message"></textarea> <br />
                <input className="block mx-auto px-10 btn btn-primary bg-gradient-to-r from-secondary to-primary text-white" type="submit" value="Submit" />
            </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
