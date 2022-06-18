import React from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { plusIcon } from "../helpers/icons";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-bold text-lg text-slate-600">
            Quizes
          </h1>
          <button
            className="flex w-40 items-center gap-2 bg-sky-800 justify-center p-2 text-white font-poppins rounded-full"
            onClick={() => navigate("/add-quiz")}
          >
            Add Quiz {plusIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
