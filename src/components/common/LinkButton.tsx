import React from "react";
import { Button } from "../ui/button";

type Props = {
  text: string;
  link: string;
  targetBlank?: boolean;
  icon?: React.ReactElement;
};

function LinkButton({ text, link, targetBlank, icon }: Props) {
  return (
    <a
      href={link}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
    >
      <Button variant="link" className="p-0">
        {icon}
        {text}
      </Button>
    </a>
  );
}

export default LinkButton;
