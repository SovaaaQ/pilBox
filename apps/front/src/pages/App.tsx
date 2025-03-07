import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center gap-4 p-2">
      <div className="max-w-md w-full bg-white rounded-lg p-2 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-balance">
          Привет!
          <br />
          Моя цель — ваше спокойствие. Давайте отслеживать лекарства вместе? 💊
        </h1>
      </div>
      <button
          type="button"
          onClick={() => {
            navigate("/medication");
          }}
          className="bg-gray-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Давайте начнём
        </button>
    </div>
  );
}

export default App;
