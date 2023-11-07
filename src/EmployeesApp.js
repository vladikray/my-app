import {CreateEmployees} from "./CreateEmployees";
import EmployeesList from "./EmployeesList";
import {Route, Routes} from "react-router-dom";
import EmployeeFullInformation from "./EmployeeFullInformation";
import React, { useState } from 'react';

const EmployeesApp = () => {
    const [appState, setAppState ] = useState({
        post: {},
        postToUpdate: {},
        postToDelete: null
    });
    const userAdded = (data) => {
        setAppState({...appState, post: data, });
    }

    const updatePost = (data) => {
        setAppState({...appState, postToUpdate: data});
    }
    const postToDelete = (id) => {
        fetch(`http://localhost:8000/api/posts/${id}`, { method: 'DELETE' })
            .then(data => {
                setAppState({...appState, id: id});
            });
    }

    return(
        <div>
        <CreateEmployees userAdded={userAdded} postToUpdate={appState.postToUpdate}/>
        <EmployeesList deletedPostId={appState.id} createdPost={appState.post} setPostToDelete={postToDelete}/>
    <Routes>
        <Route path="/employees/:userId" element={<EmployeeFullInformation setPostToUpdate={updatePost} />}>
        </Route>
    </Routes>
        </div>
    )
}

export default EmployeesApp;