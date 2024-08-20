import { createStore } from 'redux';

//aca importa nuestro reducer

import rootReducer from  './reducers';
const store = createStore(rootReducer);

export default store;