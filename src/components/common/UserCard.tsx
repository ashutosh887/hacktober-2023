import { extractUserName } from "@/util/extractUserName";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

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

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        // onClick=()
      >
        <AiOutlineMail className="inline-block w-6 h-6 mr-2" />
        {email || "undefined"}
      </button>
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2">
        <AiFillGithub className="inline-block w-6 h-6 mr-2" />
        <a href={`https://github.com/${userName}`} target="_blank">
          {userName || "undefined"}
        </a>
      </button>
    </div>
  );
}

export default UserCard;
