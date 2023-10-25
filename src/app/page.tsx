import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div className="flex flex-col min-h-screen items-center max-h-screen">
      <Nav />

      <div className="flex-grow overflow-y-scroll">hi</div>

      <Footer />
    </div>
  );
}

export default Home;
