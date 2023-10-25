import Nav from "@/components/common/Nav";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <main className="flex flex-col w-full h-screen border border-white items-center marker:space-y-2">
      <Nav />

      <div>some table</div>

      <div className="">some footer</div>
    </main>
  );
}

export default Home;
