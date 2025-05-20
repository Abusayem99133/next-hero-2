import { getDetailsPage } from "@/app/services/api";
import React from "react";
export const metadata = {
  title: {
    absolute: "Post Details",
  },
  description: "this is a post details page",
};
const PostDetailsPage = async ({ params }) => {
  console.log(params?.id);
  const { title, body } = await getDetailsPage(params.id);
  return (
    <div>
      <h1>Post Details of {params?.id}</h1>
      <h4> Title : {title}</h4>
      <p>Description: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
