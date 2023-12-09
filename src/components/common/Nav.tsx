import { appName, repositoryUrl } from "@/config/constants";
import React from "react";
import { ModeToggle } from "../ui/toggle-mode";
import data from "@/config/data.json";
import LinkButton from "./LinkButton";
import { FaGithub } from "react-icons/fa";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

function Nav({ onChange, value }: Props) {
  return (
    <div className="flex items-center justify-between py-2 px-1 w-full max-w-7xl h-max">
      <section className="flex items-center justify-center space-x-4">
        <span className="text-primary font-semibold text-xl">{appName}</span>
        <span className="text-gray-300 text-xs">
          Current Contributors: {data.length}
        </span>
      </section>

      <section className="flex justify-center items-center space-x-3">
        <input
          type="text"
          className="border border-primary bg-transparent rounded-sm px-2 py-1 focus:outline-none text-sm"
          value={value}
          onChange={onChange}
        />
        <LinkButton
          icon={<FaGithub className="w-6 h-6" />}
          link={repositoryUrl}
          targetBlank={true}
        />

        <ModeToggle />
      </section>
    </div>
  );
}

export default Nav;
