import React from "react";

const Rank = ({ username, entries }) => {
  return (
    <div>
      <div className="white f3">Hey {username}, your current rank is:</div>
      <div className="white mt3 f1">{entries}</div>
    </div>
  );
};

export default Rank;
