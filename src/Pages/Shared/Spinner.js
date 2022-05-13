import React, { useState } from "react";
import { RotateLoader } from "react-spinners";

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#50E3C2");
  return (
    <div className="sweet-loading h-screen flex justify-center items-center">
      <RotateLoader color={color} loading={loading} size={20} margin={2} />
    </div>
  );
};

export default Spinner;
