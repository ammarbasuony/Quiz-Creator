import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Icons
import { plusIcon, trashIcon } from "../helpers/icons";

// Components
import AlertBox from "./AlertBox";

// Functions
import { generateRandomId } from "../helpers/functions";

const AddQuiz = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [quizUrl, setQuizUrl] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: generateRandomId(),
      text: "",
      answer_id: null,
      answers: [
        {
          id: null,
          text: "",
          is_true: null,
        },
      ],
      feedback_false: "",
      feedback_true: "",
    },
  ]);

  const questions = quizQuestions.map((question, index) => {
    const answers = question.answers.map((answer, i) => {
      return (
        <div className="col-span-6 sm:col-span-6 mt-4" key={i}>
          <label className="block text-sm font-medium text-sky-600 font-poppins">
            Anwser {i + 1}
          </label>
          <div className="flex items-center gap-1 mt-2">
            <input
              type="text"
              autoComplete="email"
              className="font-poppins py-3 px-2 border-2 text-sky-600 block w-2/3 shadow-sm sm:text-sm border-sky-600 rounded-md"
              onChange={(e) => {
                const temp = [...quizQuestions];
                temp[index].answers[i].text = e.target.value;
                setQuizQuestions(temp);
              }}
            />
            <select
              autoComplete="country-name"
              className="font-poppins py-3 px-2 border-2 text-sky-600 block w-1/3 shadow-sm sm:text-sm border-sky-600 rounded-md"
              onChange={(e) => {
                const temp = [...quizQuestions];
                temp[index].answers[i].is_true = e.target.value;
                setQuizQuestions(temp);
              }}
            >
              <option>Is True ?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
            <button
              className="w-8 ml-3 flex items-center justify-center p-2 rounded-full bg-sky-600"
              type="button"
              onClick={() => {
                const temp = [...quizQuestions];
                temp[index].answers.splice(i, 1);
                setQuizQuestions(temp);
              }}
            >
              {trashIcon}
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="col-span-6 sm:col-span-6 mt-5" key={index}>
        <label className="block text-sm font-medium text-gray-700 font-poppins">
          Question {index + 1}
        </label>
        <div className="flex items-center gap-1 mt-2">
          <input
            type="text"
            className="font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={(e) => {
              const temp = [...quizQuestions];
              temp[index].text = e.target.value;
              setQuizQuestions(temp);
            }}
          />
          <button
            className="w-8 ml-3 flex items-center justify-center p-2 rounded-full bg-slate-500"
            type="button"
            onClick={() => {
              const temp = [...quizQuestions];
              temp.splice(index, 1);
              setQuizQuestions(temp);
            }}
          >
            {trashIcon}
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder="Feedback for false answer"
            className="font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={(e) => {
              const temp = [...quizQuestions];
              temp[index].feedback_false = e.target.value;
              setQuizQuestions(temp);
            }}
          />
          <input
            type="text"
            placeholder="Feedback for true answer"
            className="font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={(e) => {
              const temp = [...quizQuestions];
              temp[index].feedback_true = e.target.value;
              setQuizQuestions(temp);
            }}
          />
        </div>

        <div className="mt-5 text-lg font-poppins text-sky-600 flex items-center">
          Answers{" "}
          <button
            className="w-7 ml-3 flex items-center justify-center p-2 rounded-full bg-sky-600"
            type="button"
            onClick={() => {
              const temp = [...quizQuestions];
              temp[index].answers.push({
                id: generateRandomId(),
                text: "",
                is_true: null,
              });
              setQuizQuestions(temp);
            }}
          >
            {plusIcon}
          </button>
        </div>
        {answers}
      </div>
    );
  });

  const saveQuiz = () => {
    if (
      quizTitle === "" ||
      quizDescription === "" ||
      quizUrl === "" ||
      quizQuestions.length === 0
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const quizes = JSON.parse(window.localStorage.getItem("quizes")) || [];

    const quiz = {
      id: generateRandomId(),
      title: quizTitle,
      description: quizDescription,
      url: quizUrl,
      questions_answers: quizQuestions,
      score: null,
    };

    quizes.push(quiz);

    window.localStorage.setItem("quizes", JSON.stringify(quizes));

    setIsAdded(true);
  };

  return (
    <div className="min-h-screen bg-slate-200 pb-10">
      <div className="p-4 bg-white">
        <div className="container">
          <div className="flex justify-center items-center">
            <Link to="/" className="font-poppins text-slate-400 mr-3">
              &larr; Back to Home
            </Link>
            <h1 className="font-poppins font-bold text-lg text-slate-600">
              Add Quiz
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <div className="container">
          {isAdded ? (
            <AlertBox message="Quiz Saved Successfully" />
          ) : (
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 font-poppins">
                          Quiz Title
                        </label>
                        <input
                          type="text"
                          className="mt-2 font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setQuizTitle(e.target.value)}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 font-poppins">
                          URL
                        </label>
                        <input
                          type="text"
                          className="mt-2 font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setQuizUrl(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label className="block text-sm font-medium text-gray-700 font-poppins">
                          Description
                        </label>
                        <textarea
                          type="text"
                          autoComplete="email"
                          className="mt-2 font-poppins py-3 px-2 border-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setQuizDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className="text-2xl mt-5 font-poppins text-slate-700 flex items-center"
                      aria-hidden="true"
                    >
                      Questions{" "}
                      <button
                        className="w-8 ml-3 flex items-center justify-center p-2 rounded-full bg-slate-500"
                        type="button"
                        onClick={() => {
                          setQuizQuestions([
                            ...quizQuestions,
                            {
                              id: generateRandomId(),
                              text: "",
                              answer_id: null,
                              answers: [
                                {
                                  id: null,
                                  text: "",
                                  is_true: null,
                                },
                              ],
                              feedback_false: "",
                              feedback_true: "",
                            },
                          ]);
                        }}
                      >
                        {plusIcon}
                      </button>
                    </div>
                    <div className="mt-5">{questions}</div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent font-poppins shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
                      onClick={() => saveQuiz()}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
