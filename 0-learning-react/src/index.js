import React from 'react';
import ReactDom from 'react-dom';
// css
import './index.css';

const books = [
  {
    id: 1,
    author: 'Author Name',
    title: 'Book Title',
    img: 'https://m.media-amazon.com/images/I/31-thesnl6S._SS135_.jpg',
  },
  {
    id: 2,
    author: 'Author Name 2',
    title: 'Book Title 2',
    img: 'https://m.media-amazon.com/images/I/51DnVjJHoBL._SS135_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
