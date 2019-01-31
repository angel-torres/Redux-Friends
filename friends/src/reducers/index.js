import { FETCH_FRIENDS, SUCCESS, ADDING_FRIEND, ADDED_FRIEND } from '../actions';

const initialState = {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
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
        case ADDING_FRIEND:
            return {
                ...state
            }
        case ADDED_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default: 
            return state
    }
}

export default reducer;