import { appName } from "@/config/constants";
import React from "react";
import { ModeToggle } from "../ui/toggle-mode";

type Props = {};

function Nav({}: Props) {
  return (
    <div className="flex items-center justify-between py-2 w-full max-w-7xl h-max">
      <span className="text-primary font-semibold text-xl">{appName}</span>

      <ModeToggle />
    </div>
  );
}

export default Nav;
