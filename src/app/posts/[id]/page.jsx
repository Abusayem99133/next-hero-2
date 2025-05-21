import { getDetailsPage } from "@/app/services/api";
import React from "react";
export async function generateMetadata({ params }) {
  const post = await getDetailsPage(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

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
