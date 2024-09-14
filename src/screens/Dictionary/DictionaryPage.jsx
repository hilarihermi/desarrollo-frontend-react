import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../redux/dictionary/dictionaryActions';
import AddWordModal from './AddWordModal';
import ModalComponent from './ModalComponent';
import TranslateModal from './TranslateModal'; 
import './DictionaryPage.css'; 

const DictionaryPage = () => {
  const [showAddWordModal, setShowAddWordModal] = useState(false); 
  const [isDeleteWordModalOpen, setIsDeleteWordModalOpen] = useState(false); 
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);
  const dispatch = useDispatch();
  
  const openDeleteWordModal = () => setIsDeleteWordModalOpen(true); 
  const closeDeleteWordModal = () => setIsDeleteWordModalOpen(false); 

  const openTranslateModal = () => setIsTranslateModalOpen(true); 
  const closeTranslateModal = () => setIsTranslateModalOpen(false); 

  const handleAddWord = (wordData) => {
    dispatch(addWord(wordData)); 
    setShowAddWordModal(false); 
  };

  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <h2><small>Este </small> modulo(diccionario) <small> corresponde </small> al recuperatorio del{' '}</h2>
      <h2>
          <span>modulo-7</span> ReactJS URL:
      </h2>
      <div className="button-container">
        <button onClick={() => setShowAddWordModal(true)}>Agregar Palabra</button> 
        <button onClick={openDeleteWordModal}>Eliminar Palabra</button> 
        <button onClick={openTranslateModal}>Traducir Palabra</button> 
      </div>
      
      {showAddWordModal && (
        <AddWordModal
          onClose={() => setShowAddWordModal(false)}
          onAddWord={handleAddWord}
        />
      )}

      {isDeleteWordModalOpen && (
        <ModalComponent isOpen={isDeleteWordModalOpen} closeModal={closeDeleteWordModal} />
      )}
      
      {isTranslateModalOpen && (
        <TranslateModal
          isOpen={isTranslateModalOpen}
          closeModal={closeTranslateModal}
        />
      )}
      
    </div>
  );
};

export default DictionaryPage;
