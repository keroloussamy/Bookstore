import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookItem.module.css';

function BookItem({ book }) {
  return (
    <div className={styles.bookItem}>
      <p className="itemCategory">Action</p>
      <h2 className="itemTitle">{book.title}</h2>
      <p className="itemAuthor">{book.author}</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
