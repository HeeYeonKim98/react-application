import React from "react";

const Info = ({ id, title, content }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default Info;
