import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import LinkButton from "./LinkButton";

type Props = {
  name?: string;
  email?: string;
  githubURL?: string;
  about?: string;
};

function UserCard({ name, email, githubURL, about }: Props) {
  const getGitHubInfo = (url?: string) => {
    if (!url) return { link: "https://github.com/", text: "undefined" };
    const cleanUrl = url.startsWith("http")
      ? url.replace(/\/+$/, "")
      : `https://github.com/${url.replace(/\/+$/, "")}`;
    const username = cleanUrl.split("/").pop() || "undefined";
    return { link: cleanUrl, text: username };
  };

  const { link: githubLink, text: githubText } = getGitHubInfo(githubURL);

  return (
    <div className="flex flex-col bg-secondary rounded-lg p-4">
      <span className="text-primary text-xl">{name || "undefined"}</span>
      <span>{about || "undefined"}</span>

      <LinkButton
        text={email || "undefined"}
        link={`mailto:${email}`}
        targetBlank={true}
        icon={<AiOutlineMail className="inline-block w-6 h-6 mr-2" />}
      />

      <LinkButton
        text={githubText}
        link={githubLink}
        targetBlank={true}
        icon={<AiFillGithub className="inline-block w-6 h-6 mr-2" />}
      />
    </div>
  );
}

export default UserCard;
