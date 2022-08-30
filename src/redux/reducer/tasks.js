export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT":
            return [...action.payload]
             case "PRINT_HISTORY":
            return [...action.payload]
        default:
            return state;
    }
}