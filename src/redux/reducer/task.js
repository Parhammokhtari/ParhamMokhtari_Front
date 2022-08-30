export const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_Task":
            return {...action.payload}
        case "DELETE_Task":
            return {...action.payload}
        default:
            return state;
    }
}