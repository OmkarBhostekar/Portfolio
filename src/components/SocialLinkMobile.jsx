import React, { useState, useEffect } from "react";
import useMobileDetect from "use-mobile-detect-hook";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Icon } from "@iconify/react";

export const SocialLinkMobile = () => {
  const detect = useMobileDetect();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const res = detect.isMobile();
    setIsMobile(res);
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/omkar-bhostekar/",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      title: "GitHub",
      href: "https://www.github.com/OmkarBhostekar",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      child: (
        <>
          <Icon icon="simple-icons:leetcode" width={30} height={30} />
        </>
      ),
      title: "Leetcode",
      href: "https://leetcode.com/omkarbhostekar/",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      child: (
        <>
          <Icon icon="simple-icons:codeforces" width={30} height={30} />
        </>
      ),
      title: "Codeforces",
      href: "https://codeforces.com/profile/omkarbhostekar",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      child: (
        <>
          <Icon icon="simple-icons:codechef" width={30} height={30} />
        </>
      ),
      title: "Codechef",
      href: "https://www.codechef.com/users/omkar26_b/",
      style: "shadow-blue-600",
    },
  ];

  return isMobile ? (
    <div>
      <div
        name="experience"
        className="bg-gradient-to-b from-black to-gray-800 w-full pt-12 text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Profile Links
            </p>
            <p className="py-6">
              Make sure to checkout my linkedin and coding profiles
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {links.map(({ id, child, title, href, style }) => (
              <a href={href} target="_blank" rel="noreferrer">
                <div
                  key={id}
                  className={
                    "shadow-md  rounded-lg hover:scale-105 duration-500 py-3" +
                    " " +
                    style
                  }
                  onClick={() => {}}
                >
                  <div className="w-full justify-center flex">{child}</div>
                  <p className="mt-4">{title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};
