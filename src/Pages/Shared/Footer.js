import React, { useState } from "react";
import footerBG from "../../assets/images/footer.png";

const Footer = () => {
    const [date, setDate] = useState(new Date().getFullYear());
  return (
    <section
      style={{
        background: `url(${footerBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <footer className="footer pb-20 pt-10 text-base-content px-5 lg:px-16 ">
        <div>
          <span className="footer-title text-xl">Services</span>
          <a className="link link-hover text-base">Emergency Checkup</a>
          <a className="link link-hover text-base">Monthly Checkup</a>
          <a className="link link-hover text-base">Weekly Checkup</a>
          <a className="link link-hover text-base">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title  text-lg">Oral Health</span>
          <a className="link link-hover text-base">Fluoride Treatment</a>
          <a className="link link-hover text-base">Cavity Filling</a>
          <a className="link link-hover text-base">Teeth Whitening</a>
        </div>
        <div>
          <span className="footer-title  text-lg">Our Address</span>
          <p className="text-base">New York - 101010 Hudson</p>
        </div>
      </footer>
      <div className="px-10 py-4 border-t border-base-300">
        <p className="text-center">Copyright {date} &copy; AllRights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
