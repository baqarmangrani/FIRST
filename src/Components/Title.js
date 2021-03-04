import React from "react";

export const Title = (props) => {
  return <h3 onClick={() => console.log(props.title)}>{props.title}</h3>;
};
