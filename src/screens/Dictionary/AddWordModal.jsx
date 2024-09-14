import React, { useState } from 'react';

const AddWordModal = ({ onClose, onAddWord }) => {
  const [spanishWord, setSpanishWord] = useState('');
  const [englishWord, setEnglishWord] = useState('');
  const [portugueseWord, setPortugueseWord] = useState('');

  const handleAdd = () => {
    const wordData = {
      spanish: spanishWord,
      english: englishWord,
      portuguese: portugueseWord
    };

    onAddWord(wordData); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Traductor USIP</h2>
        <span className="close" onClick={onClose}>&times;</span>
        <form>
        <div className="form-group">
          <label>Español: </label>
            <input
              type="text"
              value={spanishWord}
              onChange={(e) => setSpanishWord(e.target.value)}
            />
          </div>

          <div className="form-group">
          <label>Inglés: </label>
            <input
              type="text"
              value={englishWord}
              onChange={(e) => setEnglishWord(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label>Portugués:</label>
            <input
              type="text"
              value={portugueseWord}
              onChange={(e) => setPortugueseWord(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAdd}>
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWordModal;