"use client";

import React, { useMemo, useState } from "react";
import data from "@/config/data.json";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import UserCard from "@/components/common/UserCard";

type Props = {};

function Home({}: Props) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [data, query]);

  return (
    <div className="flex flex-col min-h-screen items-center max-h-screen">
      <Nav onChange={handleChange} value={query} />

      <div className="flex-grow overflow-y-scroll w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => {
            return <UserCard key={index} {...item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
