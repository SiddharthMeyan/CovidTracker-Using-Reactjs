import React from "react";

const Maincomponent = ({ covData }) => {
  return (
    <div>
      {covData.length != 0
        ? `${covData.Active} in ${covData.Country}`
        : `nonono`}
    </div>
  );
};

export default Maincomponent;
