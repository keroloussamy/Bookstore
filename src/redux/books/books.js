import { getBooksAPI, addBookAPI } from '../../API/book';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBook = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const getBooksAsync = () => async (dispatch) => {
  const data = await getBooksAPI();
  dispatch(getBook(data));
};

export const addBookAsync = (book) => async (dispatch) => {
  const data = await addBookAPI(book);
  dispatch(addBook(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
