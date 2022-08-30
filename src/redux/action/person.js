export const setCurrentPerson = (person) => {
    return async (dispatch) => {
        await dispatch({type: "SET_PERSON", payload: person});
    };
};