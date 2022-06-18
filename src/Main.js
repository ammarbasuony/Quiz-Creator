import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import AddQuiz from "./components/AddQuiz";
import UpdateQuiz from "./components/EditQuiz";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/edit-quiz/:id" element={<UpdateQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
