import { extractUserName } from "@/util/extractUserName";
import React, { useEffect, useState } from "react";

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
      <span>{email || "undefined"}</span>
      <span>{userName || "undefined"}</span>
      <span>{about || "undefined"}</span>
    </div>
  );
}

export default UserCard;
