export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

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