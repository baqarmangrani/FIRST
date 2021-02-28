import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//setup vars

const firstBook = {
  image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
  author: "Stephenie Meyer",
  title: "Twilight",
};

const secondBook = {
  image:
    "https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png",
  author: "J. K. Rowling",
  title: "Harry Potter and the Philosopher's Stone",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          deserunt, numquam pariatur provident maxime quod blanditiis eum nemo
          neque incidunt.
        </p>
      </Book>
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { image, title, author } = props;
  console.log(props);

  return (
    <article className="book">
      <Cover image={image}></Cover>
      <Title title={title} />
      <Author author={author} />
      {props.children}
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
