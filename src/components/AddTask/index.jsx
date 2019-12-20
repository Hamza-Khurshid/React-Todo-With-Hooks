import React, { useState } from 'react';
import './styles.css';
import BACK_IMG from '../../back.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTask } from '../../redux/actions/Task';

function AddTask(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function titleHandler(e) {
        setTitle(e.target.value)
    }

    function descHandler(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if(title === '') {
            alert('Title is required.')
        } else if(description === '') {
            alert('Description is required.')
        } else {
            let task = {
                id: Math.random(),
                title,
                description
            }

            props.addTask(task);
            props.history.push('/');
        }
    }

    return (
        <div className="formContainer">
            <form id="contact">
                <img src={BACK_IMG} className="backImg" onClick={()=>props.history.goBack()} />
                <h3 style={{ display: 'inline' }}>Add Task</h3>
                <h4>Please provide following information</h4>

                <fieldset>
                    <input 
                        required 
                        autofocus 
                        type="text" 
                        tabindex="1" 
                        value={title}
                        placeholder="Type title here" 
                        onChange={(e) => titleHandler(e)}
                    />
                </fieldset>

                <fieldset>
                    <textarea 
                        required
                        tabindex="5"
                        value={description} 
                        onChange={(e)=>descHandler(e)}
                        placeholder="Type description here...." 
                    ></textarea>
                </fieldset>

                <fieldset>
                    <button 
                        name="submit" 
                        type="submit" 
                        id="contact-submit" 
                        data-submit="...Sending"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </fieldset>
                
            </form>
        </div>
     
    )
}

const mapStateToProps = (store) => ({

})

export default connect(mapStateToProps, {
    addTask
})(withRouter(AddTask));