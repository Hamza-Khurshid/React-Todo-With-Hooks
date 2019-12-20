import React, { useState } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import BACK_IMG from '../../back.png';
import { withRouter } from 'react-router-dom';
import { editTask } from '../../redux/actions/Task';

function EditTask(props) {
    console.log("Props: ", props)
    const [title, setTitle] = useState(props.location.state.title);
    const [description, setDescription] = useState(props.location.state.description);

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
                id: props.location.state.id,
                title,
                description
            }

            props.editTask(task);
            props.history.push('/');
        }
    }

    return (
        <div className="formContainer">
            <form id="contact">
                <img src={BACK_IMG} className="backImg" onClick={()=>props.history.goBack()} />
                <h3 style={{ display: 'inline' }}>Edit Task</h3>
                <h4>Please update following information</h4>
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

export default connect(null, {
    editTask
})(withRouter(EditTask));