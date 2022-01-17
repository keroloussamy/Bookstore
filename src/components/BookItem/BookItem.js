import React from 'react';
import styles from './BookItem.module.css';

function BookItem() {
  return (
    <div className={styles.bookItem}>
      <p className="itemCategory">Action</p>
      <h2 className="itemTitle">The Hunger Games</h2>
      <p className="itemAuthor">Frank Herbert</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
  );
}

export default BookItem;
