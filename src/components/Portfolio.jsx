import React from "react";
import movieRec from "../assets/portfolio/movie-rec.png";
import socialBook from "../assets/portfolio/socialbook.png";
import moneyx from "../assets/portfolio/moneyx.png";
import ticTacToe from "../assets/portfolio/tic-tac-toe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ticTacToe,
      demo: "https://youtu.be/WGEdNwMPt_Y",
      code: "https://github.com/OmkarBhostekar/TicTacToeMultiplayer",
    },
    {
      id: 2,
      src: movieRec,
      demo: "https://youtu.be/VYfV-Z5HPqM",
      code: "https://github.com/OmkarBhostekar/Engage22",
    },
    {
      id: 3,
      src: socialBook,
      demo: "https://youtu.be/uqiGgBg1q9A",
      code: "https://github.com/OmkarBhostekar/Socialbook",
    },
    {
      id: 4,
      src: moneyx,
      demo: "https://youtu.be/dGlwY6j3j6E",
      code: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 pt-12 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
