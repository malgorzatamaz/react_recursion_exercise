import React, { Component } from "react";

export const RecursiveComponent = ({ components }) => {
  const ComponentToRender = components[0];
  return (
    <div className="box">
      <ComponentToRender />
      {components.length > 1 &&
        RecursiveComponent({ components: components.slice(1) })}
    </div>
  );
};
