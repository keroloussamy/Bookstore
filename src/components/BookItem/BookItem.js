import React from 'react';
import PropTypes from 'prop-types';
// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { removeBook } from '../../redux/books/books';
import styles from './BookItem.module.css';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className={styles.bookItem}>
      <p className="itemCategory">Action</p>
      <h2 className="itemTitle">{book.title}</h2>
      <p className="itemAuthor">{book.author}</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick={removeHandler}>Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
