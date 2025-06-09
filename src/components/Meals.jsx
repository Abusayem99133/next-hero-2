"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export const metadata = {
  tittle: "Meals",
  description: "Meals Page",
};
const Meals = ({ params }) => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      if (search.length !== 1) {
        setMeals([]);
        setError(
          search.length > 1 ? "Please enter only one letter" : "No Data Found"
        );
        return;
      }

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      const mealsData = data.meals || [];
      setMeals(mealsData);

      if (mealsData.length === 0) {
        setError("No meals found for this letter");
      } else {
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
  }, []);
  console.log(meals);
  return (
    <div>
      <input
        onChange={handler}
        type="text"
        placeholder="Enter a single letter..."
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
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
              />
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
              <button className="py-4 px-2 border-2 cursor-pointer hover:bg-blue-600">
                <Link href={`meals/${meal.idMeal}`}>View Details</Link>
              </button>
            </div>
          ))
        ) : (
          <h6>{error}</h6>
        )}
      </div>
    </div>
  );
};

export default Meals;
