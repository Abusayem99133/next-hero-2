import { getMealsDetailsPage } from "@/app/services/api";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: `Meal Details for ${params.id}`,
    description: `Details page for meal ID ${params.id}`,
  };
}

const MealsDetailsPage = async ({ params }) => {
  const mealData = await getMealsDetailsPage(params.id); // Use params.id
  const { strMeal, strInstructions } = mealData || {};

  return (
    <div>
      <h1>This is Meals Details Page</h1>
      <h2>{strMeal}</h2>
      <p>{strInstructions}</p>
    </div>
  );
};

export default MealsDetailsPage;
