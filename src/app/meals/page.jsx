import Meals from "@/components/Meals";
import React from "react";

const MealsPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-red-400 font-bold">Choose Your Meals</h1>
      <p>Choose meals of you choice by searching.....</p>
      <div className=" mt-10">
        <Meals />
      </div>
    </div>
  );
};

export default MealsPage;
