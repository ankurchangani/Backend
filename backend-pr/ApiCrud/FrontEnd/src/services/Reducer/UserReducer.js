const initialState = {
    users: [],
    user: null
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] };

        case "GET_USER":
            return { ...state, users: action.payload };

        case "SINGLE_USER":
            return { ...state, user: action.payload };

        case "UPDATE_USER":
            return { ...state, user: action.payload };


        case "DELETE_USER":
            return {
                ...state,
            };


        default:
            return state;
    }
};

export default UserReducer;
