import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error — Tried accessing a route that doesn't exist:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">
          You’ve entered the <span className="text-pink-400 font-semibold">void</span>.<br />
          Nothing lives here. Not even bugs.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
        >
          Take me back to safety 
        </a>
        <p className="text-sm text-gray-400 mt-6">
          (Or check your spelling... it’s probably that.)
        </p>
      </div>
    </div>
  );
};

export default NotFound;
