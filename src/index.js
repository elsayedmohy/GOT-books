import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState(null);

  const fetchData = () => {
    axios.get(apiURL).then((response) => {
      setBooks(response.data);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>

        {/* Fetch data from API */}
        <div>
          <button onClick={fetchData} className="fetch-button">
            Fetch Data
          </button>
          <br />
        </div>

        {/* Display data from API */}

        {/* Use JSX below for each book */}
        <div className="books">
          {books &&
            books.map((book, index) => {
              return (
                <div className="book">
                  <h3>{index + 1}</h3>
                  <h2>{book.name}</h2>

                  <div className="details">
                    <p>👨: {book.authors}</p>
                    <p>📖: {book.numberOfPages}</p>
                    <p>🏘️: {book.country}</p>
                    <p>⏰: {book.released}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
