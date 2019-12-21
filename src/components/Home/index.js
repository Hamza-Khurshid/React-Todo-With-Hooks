import React from 'react';
import './styles.css';
import Task from '../Task';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

function Home(props) {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop: 25, fontSize: 34, backgroundColor: 'blue' }}>Welcome to React Hooks</h1>
            <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                <button style={{   }}>
                    <Link to="/fetch">Fetch Data</Link>
                </button>
                <button style={{   }}>
                    <Link to="/add">Add Task</Link>
                </button>
            </div>
            <div>
                {
                    props.tasks.map(task => (
                        <Task task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        tasks: store.taskReducer.tasks
    }
}

export default connect(mapStateToProps)(Home);