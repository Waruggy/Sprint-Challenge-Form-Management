import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav>
            <Link to="/register">Home</Link>
            <Link to="/users">Friends ZZZ List</Link>
            {localStorage.getItem('token') && <Link to="/users/add">Add Users</Link>}
        </nav>
     );
}
 
export default Nav;