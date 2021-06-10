import React from "react";

const Banner = ({ children = "" }) => {
  return (
    <section className="h-72 bg-cloth-preview bg-cover">{children}</section>
  );
};

export default Banner;
