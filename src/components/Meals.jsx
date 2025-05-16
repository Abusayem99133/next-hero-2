"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      // Only make API call if search is not empty
      if (search === "") {
        setMeals([]);
        setError("No Data Found");
        return;
      }

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      if (!data.meals) {
        setMeals([]);
        setError("No Data Found");
      } else {
        setMeals(data.meals);
        setError("");
      }
    } catch (error) {
      setMeals([]);
      setError("Failed to fetch data");
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div>
      <input
        onChange={handler}
        type="text"
        placeholder="search meals...."
        // value={search}
        className="border-none outline-none bg-white text-black p-4 "
      />
      <button
        onClick={loadData}
        className="border-none p-4 text-black bg-red-300 hover:bg-sky-500 hover:cursor-pointer"
      >
        Search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))
        ) : (
          <h6>{error || "No meals found"}</h6>
        )}
      </div>
    </div>
  );
};

export default Meals;
