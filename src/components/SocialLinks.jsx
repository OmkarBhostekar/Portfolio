import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Icon } from "@iconify/react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/omkar-bhostekar/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com/OmkarBhostekar",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:otbhostekar@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Leetcode <Icon icon="simple-icons:leetcode" width={30} height={30} />
        </>
      ),
      href: "https://leetcode.com/omkarbhostekar/",
    },
    {
      id: 5,
      child: (
        <>
          Codeforces{" "}
          <Icon icon="simple-icons:codeforces" width={30} height={30} />
        </>
      ),
      href: "https://codeforces.com/profile/omkarbhostekar",
    },
    {
      id: 6,
      child: (
        <>
          Codechef <Icon icon="simple-icons:codechef" width={30} height={30} />
        </>
      ),
      href: "https://www.codechef.com/users/omkar26_b/",
    },
    {
      id: 7,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[25%] left-0 fixed z-10">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
