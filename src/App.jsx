import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#18181B] min-h-screen mx-auto">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 mt-32 md:mt-12">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative h-full flex flex-col items-center md:items-start justify-center md:w-1/2 ml-10"
        >
          <div className="text-3xl md:text-5xl font-bold text-white text-center md:text-left mb:2 md:mb-4">
            Create a professional <br /> resume easily
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4 mb:2 md:mb-4">
            With this free, open-source resume builder
          </div>
          <Link to="/create">
            <button className="bg-white rounded-full w-fit text-black px-4 py-2 mb-2">
              Create Resume
            </button>
          </Link>
          <p className="text-white text-sm text-left pl-2 mb-8">
            No sign up required
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full md:w-1/2 flex justify-end items-center md:mt-0 pb-6 md:pb-0"
        >
          <div className="p-2 rounded-md bg-[#0d181e] animate-small-bounce relative shadow-lg shadow-zinc-800 mr-12">
            <img
              src={
                "https://writelatex.s3.amazonaws.com/published_ver/34627.jpeg?X-Amz-Expires=14400&X-Amz-Date=20250121T121124Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20250121/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=2fcdf2a15cf7fe065e54f190d2ad8a0cc1d0cc6ace62d8ccbe2ee6ccf16505c4"
              }
              alt="resume"
              className="h-[400px] md:h-[500px] rounded object-cover"
            />
            <div className="absolute h-full w-full rounded-md bg-gradient-to-t from-black/70 to-transparent top-0 left-0"></div>
          </div>
        </motion.div>
      </div>
      <Analytics />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
