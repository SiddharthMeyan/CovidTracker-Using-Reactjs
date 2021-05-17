import React from "react";

const Maincomponent = ({ covData }) => {
  return (
    <div>
      <center>
        <h1>Here are your Search Results:</h1>
        {covData.length != 0
          ? `${covData.Active} in Country ${covData.Country}`
          : `Search for something`}
      </center>
    </div>
  );
};

export default Maincomponent;
