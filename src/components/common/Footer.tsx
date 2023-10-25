import React from "react";
import { Button } from "../ui/button";
import { githubUrl, githubUsername } from "@/config/constants";
import LinkButton from "./LinkButton";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mt-auto py-2">
      Developed by{" "}
      <LinkButton
        text={`@${githubUsername}`}
        link={githubUrl}
        targetBlank={true}
      />
    </footer>
  );
}

export default Footer;
