import React from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import {Formik} from 'formik';
import { axiosWithAuth } from './axiosWithAuth';

const AddUser = (props) => {
    return ( 
        <Formik 
        initialValues={{
            username: '',
            password: ''
        }}
        onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(true);
            axiosWithAuth().post('http://localhost:5000/api/users', values)
            .then(res => {
                    console.log(actions);
                    props.setFriends(res.data)
                })
            .then(()=> props.history.push('/users'))
            .then(() => actions.resetForm())
            .catch(err => console.log(err))
        }}
        render={props => 
            (
                <Form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={props.handleSubmit}>
                <Form.Field
                control={Input}
                label='username'
                name='username'
                id='username'
                type='text'
                onChange={props.handleChange}
                value={props.values.username}
                width='3'
                />

                <Form.Field
                control={Input}
                label='password'
                name='password'
                id='password'
                type='text'
                onChange={props.handleChange}
                value={props.values.password}
                width='3'
                />

                <Button type='submit'>Submit</Button>
            </Form>
            )
        }
        />
     );
}
 
export default AddUser;