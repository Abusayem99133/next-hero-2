import React from "react";

const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
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
        {postData?.map(({ title, body, id }) => (
          <div key={id} className="border-2 py-4 px-2">
            <h4 className="">Title: {title}</h4>
            <p>Description: {body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
