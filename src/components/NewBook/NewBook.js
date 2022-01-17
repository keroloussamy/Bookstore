import React from 'react';

function NewBook() {
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" />
      <select>
        <option value="a">Action 1</option>
        <option value="a">Action 2</option>
        <option value="a">Action 3</option>
        <option value="a">Action 4</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default NewBook;
