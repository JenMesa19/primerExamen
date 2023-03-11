import React, {useState} from 'react'
import Card from './Card';
import FormularioModule from "./Formulario.module.css";

const Formulario = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [card, setCard] = useState("");
    const [errorMessage, seterrorMessage] = useState("");
    
    const MINIMUN_NAME_LENGTH = 3;
    const MINIMUN_AUTHOR_LENGTH = 6;
  
    const onChangeName = (e) => {
        setCard("");
        seterrorMessage("");
        setName(e.target.value);
    };

    const onChangeAuthor = (e) => {
        setCard("");
        seterrorMessage("");
        setAuthor(e.target.value);
    };

    const validateName = (name) => {
        const withoutSpacesAtBeginning = name.trimStart();
        console.log(withoutSpacesAtBeginning);
        return withoutSpacesAtBeginning.length >= MINIMUN_NAME_LENGTH;
    };

    const validateAuthor = (author) => {
        return author.length >= MINIMUN_AUTHOR_LENGTH;
    };

    const onSubmitForm = (e) => {
        // No recarga la página
        e.preventDefault();
    
        const isNameValid = validateName(name);
        const isAuthorValid = validateAuthor(author);
    
        if (!isNameValid || !isAuthorValid) {
            seterrorMessage('Por favor chequea que la información sea correcta')
        } else {
            setCard(<Card name={name} author={author}/>);
        }
    };

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={onSubmitForm}>
                <input type='text' placeholder='Nombre de libro' onChange={onChangeName} value={name} className={`${FormularioModule.inputForm}`}/>
                <br/>
                <input type='text' placeholder='Autor' onChange={onChangeAuthor} value={author} className={`${FormularioModule.inputForm}`}/>
                <br/>
                <p className={`${FormularioModule.colorError}`}>{errorMessage}</p>    
                <br/>
                <button type="submit" className={`${FormularioModule.buttonSend}`}>Enviar</button>
                {card}
            </form> 
        </>
        
    )
}

export default Formulario