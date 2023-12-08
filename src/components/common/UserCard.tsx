import { extractUserName } from "@/util/extractUserName";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import LinkButton from "./LinkButton";

type Props = {
  name?: string;
  email?: string;
  githubURL?: string;
  about?: string;
};

function UserCard({ name, email, githubURL, about }: Props) {
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    if (githubURL) {
      setUserName(extractUserName(githubURL));
    }
  }, [githubURL]);

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
        text={userName || "undefined"}
        link={`https://github.com/${userName}`}
        targetBlank={true}
        icon={<AiFillGithub className="inline-block w-6 h-6 mr-2" />}
      />
    </div>
  );
}

export default UserCard;
