import React from "react";

interface SingleBlogPropType {
  title: string;
  desc: string;
  photo: string;
}

const SingleBlog: React.FC<SingleBlogPropType> = ({ title, desc, photo }) => {
  return (
    <div className="my-5 box">
      <div className="img">
        <img src={photo} alt="" />
      </div>
      <h4> {title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default SingleBlog;
