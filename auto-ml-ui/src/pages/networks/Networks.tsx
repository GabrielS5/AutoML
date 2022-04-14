import React from "react";
import { Link } from "react-router-dom";

const Networks = () => {
  return <div>
    <h1>Networks</h1>
    <div><Link to="/networks/create">Create</Link></div>
  </div>;
};

export default Networks;