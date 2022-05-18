import React, { useState } from "react";
import { RotateLoader } from "react-spinners";

const Spinner = () => {
  let [loading] = useState(true);
  let [color] = useState("#50E3C2");
  return (
    <div className="sweet-loading h-screen flex justify-center items-center">
      <RotateLoader color={color} loading={loading} size={15} margin={2} />
    </div>
  );
};

export default Spinner;
