export const getAllTasks = () => {
    return async (dispatch) => {
        fetch(`/read_all`, {
            method: 'GET',
        }).then(res => res.json()
        ).then(json => {
            dispatch({type: "INIT", payload: json['data']})
        }).catch(() => console.log("error"));
    };
};

export const getHistoryTask = () => {
    return async (dispatch) => {
        fetch(`/history`, {
            method: 'GET',
        }).then(res => res.json()
        ).then(json => {
            dispatch({type: "PRINT_HISTORY", payload: json['history']})
        }).catch(() => console.log("error"));
    };
};

