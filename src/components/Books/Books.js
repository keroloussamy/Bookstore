import React from 'react';
import BookItem from '../BookItem/BookItem';
import NewBook from '../NewBook/NewBook';

function Books() {
  return (
    <div>
      <BookItem />
      <BookItem />
      <BookItem />
      <NewBook />
    </div>
  );
}

export default Books;
