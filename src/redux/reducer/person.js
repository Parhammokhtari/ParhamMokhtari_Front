export const personReduser = (state = {}, action) => {
    switch (action.type) {
        case "SET_PERSON":
            return {...action.payload}

        default:
            return state;
    }
}