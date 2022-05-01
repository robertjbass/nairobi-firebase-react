import { useState, useContext } from "react";
import axios from "axios";
import { ActionContext } from "../context/context";

const booksApi = import.meta.env.VITE_APP_BOOKS_API;

const BookSearch = ({ toggleModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const { bookState, setBookState } = useContext(ActionContext);

  const openOptionsHandler = () => {
    toggleModal();
    setShowActions(true);
  };

  const fetchBooks = async () => {
    const urlAppend = "key=" + booksApi;

    // Clean and generate URL
    const searchQuery = searchTerm
      .trim()
      .split("  ")
      .join(" ")
      .split(" ")
      .join("+");

    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+intitle&${urlAppend}`
      )
      .then(({ data }) => {
        const book = {
          id: data.items[0].id,
          title: data.items[0].volumeInfo.title,
          author: data.items[0].volumeInfo.authors[0],
        };
        return book;
      })
      .then((book) => {
        setBookData(book);
        setBookState(book);
      });
  };

  return (
    <>
      <div className="BookSearch">
        <h2>Search Books</h2>

        <form className="flex mb-4">
          <input
            value={searchTerm}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="hidden"
            onClick={(e) => {
              e.preventDefault();
              fetchBooks();
            }}
          >
            Search
          </button>
        </form>

        <div className="flex">
          {bookData && (
            <div>
              <h1>{bookData?.title?.toString()}</h1>
              <h2>{bookData?.author?.toString()}</h2>
              <h3>{bookData?.id?.toString()}</h3>
            </div>
          )}
          {bookData && (
            <button onClick={openOptionsHandler} className="p-4 ml-4">
              Add to library
            </button>
          )}
          {/* {showActions && <Actions className="z-50" />} */}
        </div>
      </div>
    </>
  );
};

export default BookSearch;
