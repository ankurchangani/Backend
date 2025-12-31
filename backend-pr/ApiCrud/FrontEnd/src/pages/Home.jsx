import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link
        to="/addData"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        AddData
      </Link>
    </div>
  );
};

export default Home;
