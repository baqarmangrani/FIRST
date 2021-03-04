import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//setup arr

const books = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg",
    author: "Stephenie Meyer",
    title: "Twilight",
  },
  {
    id: 2,
    image:
      "https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png",
    author: "J. K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  {
    id: 3,
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8465/9781846573781.jpg",
    author: "E. L. James",
    title: "Fifty Shades Of Grey",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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
      <Cover image={image}></Cover>
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

const Cover = (props) => <img src={props.image} alt="Twilight" />;

const Title = (props) => {
  return <h3 onClick={() => console.log(props.title)}>{props.title}</h3>;
};

const Author = (props) => {
  const { author } = props;

  return <h1>{author}</h1>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
