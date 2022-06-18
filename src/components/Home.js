import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { editIcon, trashIcon } from "../helpers/icons";

// Components
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [quizes, setQuizes] = useState(
    JSON.parse(window.localStorage.getItem("quizes")) || []
  );

  const deleteQuiz = (id) => {
    const isSure = window.confirm("Are you sure you want to delete this quiz?");
    if (!isSure) {
      return;
    }

    const newQuizes = quizes.filter((quiz) => quiz.id !== id);
    setQuizes(newQuizes);
    window.localStorage.setItem("quizes", JSON.stringify(newQuizes));
  };

  return (
    <div className="quiz-creator h-screen bg-slate-200">
      <TopBar />

      {/* Content */}
      <div className="container">
        <div className="mt-10">
          {quizes.map((quiz, index) => (
            <div
              className="p-5 bg-white rounded-xl font-poppins text-slate-600 flex justify-between items-center mb-5"
              key={index}
            >
              <div>{quiz.title}</div>
              <div>
                <button
                  className="w-10 bg-slate-600 p-3 rounded-full mr-2"
                  onClick={() => navigate(`/edit-quiz/${quiz.id}`)}
                >
                  {editIcon}
                </button>
                <button
                  className="w-10 bg-slate-400 p-3 rounded-full"
                  onClick={() => deleteQuiz(quiz.id)}
                >
                  {trashIcon}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
