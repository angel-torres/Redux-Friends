import { FETCH_FRIENDS, SUCCESS } from '../actions';

const initialState = {
    friends: []
}

function reducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_FRIENDS:
            return {...state};
        case SUCCESS:
            return {
                ...state,
                friends: action.payload
            }
        default: 
            return state
    }
}

export default reducer;