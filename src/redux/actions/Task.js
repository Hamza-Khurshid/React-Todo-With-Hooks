import axios from 'axios';
import endpoint from '../../Endpoint';

export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const FETCH_DATA = "FETCH_DATA";
export const DELETE_TASK = "DELETE_TASK";
export const FETCH_DATA_ERR = "FETCH_DATA_ERR";

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function editTask(task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export function fetchData() {
    return dispatch => {
        axios.get(endpoint + '/posts')
            .then(res => {
                console.log("Posts: ", res);
                if(res.status == 200) {
                    dispatch({
                        type: FETCH_DATA,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: FETCH_DATA_ERR
                    })
                }
            })
    }
}