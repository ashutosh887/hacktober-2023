import React from "react";
import { Button } from "../ui/button";

type Props = {
  text: string;
  link: string;
  targetBlank?: boolean;
};

function LinkButton({ text, link, targetBlank }: Props) {
  return (
    <a
      href={link}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
    >
      <Button variant="link" className="p-0">
        {text}
      </Button>
    </a>
  );
}

export default LinkButton;
