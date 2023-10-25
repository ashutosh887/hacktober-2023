import { appName } from "@/config/constants";
import React from "react";
import { ModeToggle } from "../ui/toggle-mode";

type Props = {};

function Nav({}: Props) {
  return (
    <div className="w-full flex items-center max-w-7xl h-max py-2 justify-between">
      <span className="text-primary font-semibold text-xl">{appName}</span>

      <ModeToggle />
    </div>
  );
}

export default Nav;
