import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a pre-final year undergrad at TSEC, Mumbai pursuing Bachelor's of
          Engineering in Information Technology.
          <br />
          <br />
          I've experience in Android and backend development. Interned with 2
          startup as an Android Developer Intern. I am backed development
          enthusiast love to work on Node.js, React.js and FastAPI.
        </p>
        <br />
        <p className="text-xl">
          I am highly interested in algorithmic problem solving and have a grasp
          on data structures and algorithms. I am 3 Star rated (1724) on
          codechef, Leetcode 1744 rated and Pupil on codeforces (1329).
        </p>
      </div>
    </div>
  );
};

export default About;
