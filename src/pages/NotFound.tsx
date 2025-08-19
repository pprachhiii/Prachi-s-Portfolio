import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "🚨 404 Alert! Route not found:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-800 text-white px-4 animate-fade-in">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold mb-4 animate-bounce">404</h1>
        <p className="text-xl mb-6">
          Oops! You’ve wandered into the <span className="text-pink-400 font-bold">cosmic void</span>.<br />
          Nothing to see here... except maybe a lost sock or two 🧦
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transform transition-all text-white font-semibold rounded-2xl shadow-lg"
        >
          Beam me back home
        </a>
        <p className="text-sm text-gray-300 mt-6 italic">
          Tip: Check your URL — the void is tricky!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
