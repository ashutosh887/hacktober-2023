import { name } from "@/config/common";
import React from "react";

type Props = {};

function Nav({}: Props) {
  return (
    <div className="flex justify-between p-2 w-full max-w-7xl">
      <span>{name}</span>

      <span>Theme Toggle</span>
    </div>
  );
}

export default Nav;
