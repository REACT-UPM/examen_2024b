import React, { useState, useEffect } from 'react';

function Libro({ book, setBookList, bookList }) {
  const [comentario, setComentario] = useState(book.comentario);
  const [guardado, setGuardado] = useState(false);
  const [showImg, setShowImg] = useState(true);

  const guardarComentario = () => {
    setBookList(prevBooks => prevBooks.map(b => 
      b.titulo === book.titulo ? { ...b, comentario } : b
    ));
    setGuardado(true);
  };

  // Muestra el mensaje de guardado por 2 segundos
  useEffect(() => {
    if (guardado) {
      const timer = setTimeout(() => setGuardado(false), 2000);
      setComentario("");
      return () => clearTimeout(timer);
    }
  }, [guardado]);

    const hideImg = () => {
        setShowImg(false);
    }

    const generarConIA = async () => {
        /*
        const resp = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR API KEY'
            },
            body: JSON.stringify({
                prompt: `Genera un comentario para el libro ${book.titulo}`,
                max_tokens: 100
            })
        })
        const data = await resp.json();
        */
        // Simulamos la respuesta de la API
        const data = "This is a comment about the book The Catcher in the Rye. This book is a classic of American literature.";
               
        setComentario(data);
    }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', padding: 20, margin: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        {showImg && <img src={book.portada} alt={book.titulo} width={100} style={{ marginRight: 20 }} onClick={()=>hideImg()}/>}
        <div>
            <h2>{book.titulo}</h2>
            <h3>{book.autor}</h3>
            <h3>{book.año}</h3>
        </div>  
      </div>
      <textarea value={comentario} onChange={e => setComentario(e.target.value)} placeholder="Añadir comentario" />
        <div>
            <button className="mybtn" onClick={guardarComentario} style={{ marginBottom: 20 }}>Guardar comentario</button>
            <button className="mybtn" onClick={generarConIA} style={{ marginBottom: 20 }}>Generar comentario con IA</button>
        </div>
      {guardado && <p>Guardado con éxito</p>}
      {book.comentario && <p>Comentario: {book.comentario}</p>}
    </div>
  );
}

export default Libro;