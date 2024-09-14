import { ADD_WORD, REMOVE_WORD, TRANSLATE_WORD, CLEAR_TRANSLATION } from './dictionaryTypes';

const initialState = {
  words: [], 
  translation: '', 
  error: '', 
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    case REMOVE_WORD:
      return {
        ...state,
        words: state.words.filter(word =>
          word.spanish !== action.payload &&
          word.english !== action.payload &&
          word.portuguese !== action.payload
        ),
      };
    case TRANSLATE_WORD:
      const { inputWord, language } = action.payload;

      const wordEntry = state.words.find(word =>
        word.spanish === inputWord ||
        word.english === inputWord ||
        word.portuguese === inputWord
      );

      if (wordEntry) {
        let translation = '';

        switch (language) {
          case 'English':
            translation = wordEntry.english || 'Traducción no disponible';
            break;
          case 'Spanish':
            translation = wordEntry.spanish || 'Traducción no disponible';
            break;
          case 'Portuguese':
            translation = wordEntry.portuguese || 'Traducción no disponible';
            break;
          default:
            translation = 'Idioma no compatible';
        }

        return {
          ...state,
          translation: translation,
          error: '', 
        };
      } else {
        return {
          ...state,
          translation: 'Palabra no encontrada',
          error: 'Palabra no encontrada', 
        };
      }
    case CLEAR_TRANSLATION:
      return {
        ...state,
        translation: '',
        error: '', 
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
