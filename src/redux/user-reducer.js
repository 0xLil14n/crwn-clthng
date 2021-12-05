const INITIAL_STATE = {
    currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    // if state is null, it WON'T take the initial state bc null is considered a real value
    // reducer == fn that takes in CURRENT STATE and ACTION
    // receives STATE which is the original state/initial state 
    // ACTION
    // actions have a 1) type, 2) payload
    // every reducer gets every single action that gets fired
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;

    }
};

export default userReducer;