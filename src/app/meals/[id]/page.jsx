import { getMealsDetailsPage } from "@/app/services/api";
import React from "react";
export async function generateMetadata({ params }) {
  return {
    title: `Meal Details for ${params.id}`,
    description: `Details page for meal ID ${params.id}`,
  };
}
const MealsDetailsPage = async ({ params }) => {
  console.log(params?.id);
  const { title, body } = await getMealsDetailsPage(params?.id);
  return (
    <div>
      <h1>This is Meals Details Page</h1>
    </div>
  );
};

export default MealsDetailsPage;
