import React, { useState, useEffect } from 'react';
import {books} from './books-data';
import Libro from './Libro';
import Formulario from './Formulario';

function App() {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [bookList, setBookList] = useState(books);

  let filteredBooks;
  if (filterYear) {
    filteredBooks = bookList.filter(book => 
      book.año.toString().includes(filterYear)
    );
  } else {
    filteredBooks = bookList.filter(book => 
      book.titulo.toLowerCase().includes(filterTitle.toLowerCase())
    );
  }

  const rnd = () => {
    const randomIndex = Math.floor(Math.random() * bookList.length);
    setFilterTitle(bookList[randomIndex].titulo);
    setFilterYear('');
  };

  return (
    <div>
      <h1>Buscador de Libros</h1>
      <Formulario filtroTitulo={setFilterTitle} filtroAño={setFilterYear} defecto="Busca tu libro" muestraRandomBtn="true" randomFunction={rnd} />

      <h2>Mostrando {filteredBooks.length} libros</h2>

      {filteredBooks.map((book, index) => (
        <Libro key={index} book={book} setBookList={setBookList} bookList={bookList} />
      ))}
    </div>
  );
}

export default App;



