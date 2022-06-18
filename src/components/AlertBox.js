import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { successIcon } from "../helpers/icons";

const AlertBox = ({ message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, []);

  return (
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="flex items-center justify-center py-5">
          {successIcon}
        </div>
        <h1 className="text-center text-slate-600 font-poppins font-bold text-xl">
          {message}
        </h1>
      </div>
    </div>
  );
};

export default AlertBox;
