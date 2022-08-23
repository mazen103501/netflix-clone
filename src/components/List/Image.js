import React from "react";

function Image({ className, id, src, alt }) {
  const clicking = (e) => {
    e.preventDefault();
    console.log(id);
  };
  return (
    <div onClick={clicking}>
      <img
        className={className}
        src={src}
        alt={alt}
        tabIndex="-1"
        style={{ width: "100%", display: "inline-block" }}
      />
    </div>
  );
}

export default Image;
