const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getBooksAPI = async () => {
  const data = await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books`)
    .then((responce) => responce.json());
  return data;
};

export const addBookAPI = async (book) => {
  await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((responce) => responce.text());
};

export const removeBookAPI = async (id) => {
  await fetch(`${baseURL}/apps/o3JOPgIWvfQ0PNJonLQr/books/${id}`, {
    method: 'DELETE',
  }).then((responce) => responce.text());
};
