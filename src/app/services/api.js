export const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
export const getDetailsPage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
export const getMealsDetailsPage = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  return data.meals?.[0];
};
// export const getMealsDetailsPage = async (id) => {
//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//   const data = await res.json();
//   return data.meals?.[0]; // Return the actual meal object
// };
