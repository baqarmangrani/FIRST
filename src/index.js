import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//setup arr

const books = [
  {
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
    author: "Stephenie Meyer",
    title: "Twilight",
  },
  {
    image:
      "https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png",
    author: "J. K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  // console.log(name);
  return <h1>{name}</h1>;
});

console.log(newNames);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const { image, title, author } = props;
  console.log(props);

  return (
    <article className="book">
      <Cover image={image}></Cover>
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};

const Cover = (props) => <img src={props.image} alt="Twilight" />;

const Title = (props) => {
  return <h3>{props.title}</h3>;
};

const Author = (props) => {
  const { author } = props;

  return <h1>{author}</h1>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
