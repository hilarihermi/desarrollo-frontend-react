import { ADD_WORD, REMOVE_WORD, TRANSLATE_WORD } from './dictionaryTypes';

export const addWord = (wordData) => ({
  type: ADD_WORD,
  payload: wordData,
});

export const removeWord = (wordData) => ({
  type: REMOVE_WORD,
  payload: wordData,
});

export const translateWord = (inputWord, language) => ({
  type: TRANSLATE_WORD,
  payload: { inputWord, language },
});
