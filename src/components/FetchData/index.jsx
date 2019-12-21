import React, { useState, useEffect } from 'react';
import './styles.css';
import BACK_IMG from '../../back.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from '../Loader';
import { fetchData } from '../../redux/actions/Task';
import Task from '../Task';

function FetchData(props) {
    const [loading, setLoader] = useState(true);

    useEffect(() => {
        props.fetchData();
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [props.posts]);

    return (
        <div className="formContainer">
            {
            loading ?
                    <Loader />
            :
                <form id="contact">
                    <img src={BACK_IMG} className="backImg" onClick={()=>props.history.goBack()} />
                    <h3 style={{ display: 'inline' }}>Posts</h3>
                    <h4>Following information is fetched from server</h4>  

                    {
                        props.posts.map(post => (
                            <div className="post">
                                <p><b>Post: </b>{post.title}</p>
                                <div className="line"></div>
                            </div>
                        ))
                    } 
                </form>
            }
        </div>
     
    )
}

const mapStateToProps = (store) => ({
    posts: store.taskReducer.posts,
})

export default connect(mapStateToProps, {
    fetchData
})(withRouter(FetchData));