import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineMessage,
  AiOutlineTeam,
} from "react-icons/ai";
import {
  FaNewspaper,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black gap-52 md:gap-0">
      <div className="flex flex-col items-center gap-20 px-8 py-4 justify-evenly md:justify-between md:flex-row ">
        <div className="flex flex-wrap gap-4 socialicons icons">
          <a
            href="https://www.linkedin.com/in/akshatnathani/"
            className="group"
          >
            <div className="transform icon group-hover:scale-125">
              <FaLinkedin
                className="w-8 h-8 text-white group-hover:text-linkedin"
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </a>
          <a href="https://twitter.com/kyzolia" className="group">
            <div className="transform icon group-hover:scale-125">
              <FaTwitter
                className="w-8 h-8 text-white group-hover:text-twitter"
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </a>
          <a href="https://www.instagram.com/akkshth" className="group">
            <div className="relative transform icon group-hover:scale-125">
              <FaInstagram
                className="relative z-10 w-8 h-8 text-white group-hover:text-instagram"
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </a>
          <a href="https://github.com/akshat-nathani" className="group">
            <div className="transform icon group-hover:scale-125">
              <FaGithub
                className="w-8 h-8 text-white group-hover:text-github"
                style={{ transition: "color 0.3s" }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-white">
          Made with 💝 by{" "}
          <a
            href="https://linkedin.com/in/akshatnathani"
            className="font-semibold decoration-none hover:underline"
          >
            Akshat Nathani
          </a>{" "}
          Copyright &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
