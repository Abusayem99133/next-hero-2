import Image from "next/image";
import React from "react";
export const metadata = {
  title: {
    absolute: "Gallery",
  },
  description: "this is gallery in the world",
};
const GalleryPage = () => {
  return (
    <div className="min-h-screen text-center">
      <h1>This is Gallery Page </h1>
      <Image src="/images/test.jpg" alt="" height="780" width="1420" />
    </div>
  );
};

export default GalleryPage;
