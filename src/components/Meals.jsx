"use client";
import React, { useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handler}
        type="text"
        placeholder="search meals...."
        className="border-none outline-none bg-white text-black p-4 "
      />
      <button className="border-none p-4 text-black bg-red-300 hover:bg-sky-500 hover:cursor-pointer">
        {" "}
        Search
      </button>
    </div>
  );
};

export default Meals;
