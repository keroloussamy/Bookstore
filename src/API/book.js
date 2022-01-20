const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getBooksAPI = async () => {
  const data = await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books`)
    .then((responce) => responce.json());
  return data;
};

export const addBookAPI = async (book) => {
  const response = await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const data = await response.text();
  return data;
};
