const INITIAL_STATE = {
    user: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "User":
            return { ...state, user: action.payload }
        default:
            return state
    }
}
export default authReducer
