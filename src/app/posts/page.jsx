import React from "react";
import { getPostData } from "../services/api";
import Link from "next/link";
export const metadata = {
  title: "Next-Hero | Post Page",
};
const PostPage = async () => {
  const postData = await getPostData();
  console.log(postData);
  return (
    <div>
      <h1 className="text-4xl font-bold my-10 bg-indigo-600 mask-from-cyan-500 py-1">
        This is Post Page
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {postData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 py-4 px-2">
            <h4 className="">Title: {title}</h4>
            <p>Description: {body}</p>
            <button className="bg-red-400 py-2 px-2">
              <Link href={`/posts/${id}`}>See Details</Link>{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
