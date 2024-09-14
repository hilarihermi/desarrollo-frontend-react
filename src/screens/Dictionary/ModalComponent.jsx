import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWord } from '../../redux/dictionary/dictionaryActions';

const ModalComponent = ({ isOpen, closeModal }) => {
  const [inputWord, setInputWord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const words = useSelector(state => state.dictionary.words); 
  const dispatch = useDispatch();

  const handleRemoveWord = () => {
    const wordExists = words.some(word =>
      word.spanish === inputWord ||
      word.english === inputWord ||
      word.portuguese === inputWord
    );

    if (wordExists) {
      dispatch(removeWord(inputWord)); 
      setErrorMessage(''); 
      closeModal(); 
    } else {
      setErrorMessage('La palabra no existe en el diccionario.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Traductor USIP</h2>
        <span className="close" onClick={closeModal}>&times;</span>
        <h4>¿Qué palabra desea eliminar del diccionario?</h4>
        <h4>Puede escribir su palabra en ESPAÑOL, INGLÉS o PORTUGUÉS</h4>
        <form>
          <label>Palabra:</label>
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder="Ingrese la palabra"
          />
          <button type="button" onClick={handleRemoveWord}>Eliminar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
