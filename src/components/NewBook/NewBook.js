// import useDispatch hook
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import React, { useState } from 'react';
// import your Action Creators
import { addBookAsync } from '../../redux/books/books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const CategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: nextId(),
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBookAsync(newBook));
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select value={category} onChange={CategoryHandler}>
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
