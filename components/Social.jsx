"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/carlos-escorcia-polo-0109441a6/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
      
    </div>
  );
};

export default Social;
