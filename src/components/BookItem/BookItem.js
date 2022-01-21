import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBookAsync(book.item_id));
  };

  return (
    <div className="bg-white mx-20 my-4 p-5 border rounded border-zinc-200 flex flex-wrap">
      <div className="grow">
        <p className="text-gray-400 text-sm font-bold">{book.category}</p>
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-sky-500 text-sm">Frank Herbert</p>
        <ul className="text-sky-500 text-sm flex flex-row mt-4 gap-x-3">
          <li><button type="button" onClick="">Comments</button></li>
          <span className="text-gray-300">|</span>
          <li><button type="button" onClick={removeHandler}>Remove</button></li>
          <span className="text-gray-300">|</span>
          <li><button type="button" onClick="">Edit</button></li>
        </ul>
      </div>
      <div className="flex my-auto pr-16 border-r-2">
        <div className="border border-4 border-sky-500 rounded-full w-16 h-16 mr-2" />
        <div>
          <p className="font-bold text-2xl mt-2">100%</p>
          <p className="text-sm text-gray-400">Completed</p>
        </div>
      </div>
      <div className="ml-16 my-auto mr-20">
        <h3 className="text-gray-400 text-sm mb-2">CURRENT CHAPTER</h3>
        <h4 className="mb-5">Chapter 17</h4>
        <button type="button" className="bg-sky-500 text-white px-6 py-1 rounded">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
