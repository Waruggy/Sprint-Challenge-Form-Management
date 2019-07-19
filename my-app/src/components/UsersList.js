import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';

const UsersList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:6000/api/restricted/data')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
    return ( 
        <div className="UsersList">

            {users.map(user => {
                return (
                <div className="friend">
                    {user.username}
                    {user.password}
                </div>
                )
            })}
            <Route path="/user/add" render={props => 
                <AddUser {...props} setUsers={setUsers} />
            } 
                />
        </div>
    );
}
 
export default UsersList;