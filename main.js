

async function fetchAllCategoriesBooks() {
  const apiKey = 'uE9S4Rnk2v3MfLE2h3t457GE0N7SxPwp';
  const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.lists) {
      displayRandomBook(data.results.lists);
    } else {
      console.log('Engin gögn fundust.');
    }
  } catch (error) {
    console.error('Villa við að sækja gögn:', error);
  }
}

function displayRandomBook(lists) {
  
  const allBooks = lists.flatMap(list => list.books);

  const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];

  const bookDisplay = document.getElementById('bookDisplay');
  bookDisplay.innerHTML = `
  <h3>${randomBook.title}</h3>
  <p>Author: ${randomBook.author}</p>
  <p>Description: ${randomBook.description || 'No description available'}</p>
`;

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('randombutton').addEventListener('click', fetchAllCategoriesBooks);
});

