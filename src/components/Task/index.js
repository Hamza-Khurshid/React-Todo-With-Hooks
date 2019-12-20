import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import TASK_IMG from '../../task.png';
import EDIT_IMG from '../../edit.png';
import DELETE_IMG from '../../delete.png';
import { withRouter } from 'react-router-dom';
import { deleteTask } from '../../redux/actions/Task';

function Task(props) {

    function editHandler() {
        props.history.push({
            pathname: '/edit',
            state: props.task
        });
    }

    function deleteHandler() {
        let id = props.task.id;
        props.deleteTask(id);
    }

    return (
        <div className="taskContainer">
            <div className="textDiv">
                <img src={TASK_IMG} className="taskImage" align="center" />
                <h3 className="title">Title: </h3>
                <p className="text">{props.task.title}</p>
            </div>
            <div className="actionsDiv">
                <img src={EDIT_IMG} className="actionImage" onClick={editHandler} />
                <img src={DELETE_IMG} className="actionImage" onClick={deleteHandler} />
            </div>
        </div>
    )
};

export default connect(null, {
    deleteTask
})(withRouter(Task));