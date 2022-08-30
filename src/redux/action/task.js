export const setCurrentTask = (task) => {
    return async (dispatch) => {
        await dispatch({type: "SET_Task", payload: task});
    };
};

export const delete_task = (id) => {
    return async () => {
        fetch(`/delete?id=${id}`, {
            method: 'GET',
        })
    };
};

;