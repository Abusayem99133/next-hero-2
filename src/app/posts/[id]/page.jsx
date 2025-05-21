import { getDetailsPage } from "@/app/services/api";
import React from "react";
export const generateMetadata = async ({ params }) => {
  const post = await getDetailsPage(params.id);
  return {
    title: post.title.slice(0, 24),
    description: post.body,
  };
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
