"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-indigo-600 to-emerald-400 items-center justify-center p-6">
        <img
          src="/auth.png"
          alt="Device verification illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>
          <p className="text-slate-500 mb-6">
            {isLogin
              ? "Access your account to verify devices or transfer ownership."
              : "Create a new account to start buying, selling, and verifying devices safely."}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
