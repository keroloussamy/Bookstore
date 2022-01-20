const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const getBooks = async () => {
  const data = await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books`)
    .then((responce) => responce.json());
  return data;
};

export default getBooks;
