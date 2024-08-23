import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },

      // password  paswword valor fguardado en redux

};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }               
            }
        };
        case CLEAR_FORM_DATA:
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                }
            };
        default:
            return state;
    }
};

export default formReducer;