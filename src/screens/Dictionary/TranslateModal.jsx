import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translateWord } from '../../redux/dictionary/dictionaryActions';
import { CLEAR_TRANSLATION } from '../../redux/dictionary/dictionaryTypes';
import './addWordModal.css';

const TranslateModal = ({ isOpen, closeModal }) => {
  const [inputWord, setInputWord] = useState('');
  const [language, setLanguage] = useState('English');
  const { translation, error } = useSelector(state => state.dictionary);
  const dispatch = useDispatch();

  const handleTranslate = () => {
    dispatch(translateWord(inputWord, language));
  };

  useEffect(() => {
    if (!isOpen) {
      setInputWord('');
      setLanguage('English');
      dispatch({ type: CLEAR_TRANSLATION }); 
    }
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Traductor USIP</h2>
        <span className="close" onClick={closeModal}>&times;</span>
        <h4>¿Qué palabra desea traducir en el diccionario?</h4>
        <h4>Agregue su palabra y después el idioma de traducción</h4>
        <form>
          <div className="form-group">
            <label>Palabra a traducir:</label>
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              placeholder="Introduce la palabra"
            />
          </div>
          <div className="form-group">
            <label>Idioma de traducción:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea readOnly value={translation} />
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleTranslate}>Traducir</button>
        </form>
      </div>
    </div>
  );
};

export default TranslateModal;
