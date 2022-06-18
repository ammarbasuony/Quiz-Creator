import { plusIcon, editIcon, trashIcon } from "./helpers/icons";
const App = () => {
  return (
    <div className="quiz-creator h-screen bg-slate-200">
      {/* Top Bar */}
      <div className="p-4 bg-white">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="font-poppins font-bold text-lg text-slate-600">
              Quizes
            </h1>
            <button className="flex w-40 items-center gap-2 bg-sky-800 justify-center p-2 text-white font-poppins rounded-full">
              Add Quiz {plusIcon}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="mt-10">
          <div className="p-5 bg-white rounded-xl font-poppins text-slate-600 flex justify-between items-center mb-5">
            <div>Quiz Title</div>
            <div>
              <button className="w-10 bg-slate-600 p-3 rounded-full mr-2">
                {editIcon}
              </button>
              <button className="w-10 bg-slate-400 p-3 rounded-full">
                {trashIcon}
              </button>
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl font-poppins text-slate-600 flex justify-between items-center mb-5">
            <div>Quiz Title</div>
            <div>
              <button className="w-10 bg-slate-600 p-3 rounded-full mr-2">
                {editIcon}
              </button>
              <button className="w-10 bg-slate-400 p-3 rounded-full">
                {trashIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
