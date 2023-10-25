import { extractUserName } from "@/util/extractUserName";
import React, { useEffect, useState } from "react";

type Props = {
  name?: string;
  email?: string;
  githubUrl?: string;
  about?: string;
};

function UserCard({ name, email, githubUrl, about }: Props) {
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    if (githubUrl) {
      setUserName(extractUserName(githubUrl));
    }
  }, [githubUrl]);

  return (
    <div className="bg-secondary flex flex-col rounded-lg p-4 m-1">
      <span className="text-primary">{name || "undefined"}</span>
      <span>{email || "undefined"}</span>
      <span>{userName || "undefined"}</span>
      <span>{about || "undefined"}</span>
    </div>
  );
}

export default UserCard;
