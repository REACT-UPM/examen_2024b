import React, { useState } from 'react';

export default function Formulario(props) {
    const [campo, setCampo] = useState('');
    
    const buscar = () => {
        //si campo es de tipo texto se busca por titulo, si es de tipo número se busca por año
        if(isNaN(campo)){
            props.filtroTitulo(campo);
            props.filtroAño("");
        } else {
            props.filtroAño(campo);
            props.filtroTitulo("");
        }
    }

    return <div>
      <input type="text" placeholder={props.defecto} value={campo} onChange={e => setCampo(e.target.value)}/>
      <button className="mybtn"  onClick={() => buscar()}>Buscar</button>
      {props.muestraRandomBtn && <button className="mybtn" onClick={() => props.randomFunction()}>Aleatorio</button>}
    </div>;
}
