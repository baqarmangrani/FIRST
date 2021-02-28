import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const author = "Stephenie Meyer";
const title = "Twilight";
const imgSource =
  "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="AM" age={65} sex={"male"} />
      <Book title={title} author={author} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <Cover image={imgSource}></Cover>
      <Title title={props.title} />
      <Author />
      <p>{props.age}</p>
      {/* {console.log(props)} */}
    </article>
  );
};

const Cover = (props) => <img src={props.image} alt="Twilight" />;

const Title = (props) => {
  return (
    <h3 /*style={{ color: "#f0F", fontSize: "0.75rem", margin: "0.25rem" }} */>
      {props.title}
    </h3>
  );
};

const Author = () => <h1>{author.toUpperCase()}</h1>;

ReactDOM.render(<BookList />, document.getElementById("root"));
