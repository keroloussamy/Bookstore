// import useDispatch hook
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import React, { useState } from 'react';
// import your Action Creators
import { addBook } from '../../redux/books/books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: nextId(),
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        value={author}
        onChange={AuthorHandler}
        placeholder="Author"
      />

      <input
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select>
        <option value="a">Action 1</option>
        <option value="a">Action 2</option>
        <option value="a">Action 3</option>
        <option value="a">Action 4</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
    </form>
  );
}

export default NewBook;
