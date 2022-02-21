import React, { useEffect } from "react";

import "./Book.css";

const Book = ({ recommendedBooks, indexBegin, indexEnd }) => {
  console.log(recommendedBooks);

  const buttonsMarkup = recommendedBooks
    .slice(indexBegin, indexEnd)
    .map((book) => (
      <details key={book.id}>
        <summary className="book-button">{book.title}</summary>
        <p>{book.author}</p>
        <p>{book.publishedDate}</p>
        <p>{book.genre}</p>
      </details>
    ));

  return <div className="book-container">{buttonsMarkup}</div>;
};

export default Book;
