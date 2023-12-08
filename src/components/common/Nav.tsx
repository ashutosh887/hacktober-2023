import { appName, repositoryUrl } from "@/config/constants";
import React from "react";
import { ModeToggle } from "../ui/toggle-mode";
import data from "@/config/data.json";
import LinkButton from "./LinkButton";
import { FaGithub } from "react-icons/fa";

type Props = {};

function Nav({}: Props) {
  return (
    <div className="flex items-center justify-between py-2 px-1 w-full max-w-7xl h-max">
      <section className="flex items-center justify-center space-x-4">
        <span className="text-primary font-semibold text-xl">{appName}</span>
        <span className="text-gray-300 text-xs">
          Current Contributors: {data.length}
        </span>
      </section>

      <section className="flex justify-center items-center space-x-3">
        <LinkButton
          icon={<FaGithub className="w-6 h-6" />}
          link={repositoryUrl}
        />

        <ModeToggle />
      </section>
    </div>
  );
}

export default Nav;
