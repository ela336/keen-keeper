import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

const Errorpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            The page you are looking for might have been removed, renamed,
            or is temporarily unavailable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              Reload Page
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-6">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default Errorpage;