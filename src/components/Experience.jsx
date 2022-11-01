import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import android from "../assets/android.png";
import node from "../assets/node.png";
import graphql from "../assets/graphql.png";
import flutter from "../assets/flutter.png";
import python from "../assets/python.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: android,
      title: "Android",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 8,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-500",
    },
    // {
    //   id: 9,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-500",
    // },
  ];

  return (
    <div>
      <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full pt-12 text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="py-6">These are some technologies I've worked on</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={
                  "shadow-md  rounded-lg hover:scale-105 duration-500 py-2" +
                  " " +
                  style
                }
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
