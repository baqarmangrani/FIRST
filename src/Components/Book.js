import React from "react";

import Picture from "./Cover";
import Author from "./Author";
import { Title } from "./Title";

const Book = ({ image, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("Hello World");
  };

  const LogAuthor = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Picture image={image}></Picture>
      <Title title={title} />
      <Author author={author} />
      <button type="button" onClick={clickHandler}>
        Click Here!
      </button>
      <button
        type="button"
        onClick={() => {
          LogAuthor(author);
        }}
      >
        Press Me !
      </button>
    </article>
  );
};

export default Book;
