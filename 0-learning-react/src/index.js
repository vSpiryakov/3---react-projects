import React from 'react';
import ReactDom from 'react-dom';
// css
import './index.css';

const books = [
  {
    author: 'Author Name',
    title: 'Book Title',
    img: 'https://m.media-amazon.com/images/I/31-thesnl6S._SS135_.jpg',
  },
  {
    author: 'Author Name 2',
    title: 'Book Title 2',
    img: 'https://m.media-amazon.com/images/I/31-thesnl6S._SS135_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='book'></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
