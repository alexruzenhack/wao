import { Button, Flex, Form, TextField } from '@adobe/react-spectrum';
import gql from 'graphql-tag';
import React, { useCallback, useContext, useState } from 'react'
import { useMutation } from 'urql';
import { UserContext } from '../Providers/UserProvider';
import { Redirect } from 'react-router-dom';

const NEW_USER_MUTATION = gql`
    mutation NewUser($name: String!, $email: String!) {
        newUser(data: {
            name: $name,
            email: $email
        }) {
            id
            name
            email
        }
    }
`;

export function NewUser(props) {
    const userState = useContext(UserContext);

    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [submitted, setSubmitted] = useState(false);
    let [newUserState, newUserMutation] = useMutation(NEW_USER_MUTATION);
    let [redirect, setRedirect] = useState(false);

    const handleSubmit = useCallback(() => {
        if(!newUserState.fetching) {
            const result = newUserMutation({name, email});
            setSubmitted(true);
            result.then(response => {
                if (response.data.newUser) {
                    userState.identifyUser(response.data.newUser);
                    setRedirect(true);
                }
            });
        }
    }, [newUserState, newUserMutation, name, email, setSubmitted, userState, setRedirect]);

    return (
        <>
            {redirect ? <Redirect to='/' /> : <></>}
            <Flex 
                direction="column"
                gap="size-100"
                alignItems="center"
                >
                {!name ? <h1>Hi!</h1> : <h1>Hi {name}!</h1>}

                
                <Form width="50%" maxWidth="size-3600" >
                    <TextField onChange={setName} label="Name" placeholder="John Doe" />
                    {!submitted 
                    ? <TextField
                        type='email'
                        onChange={setEmail} label="E-mail" placeholder="john@doe.com" />
                    : <TextField
                        type='email'
                        validationState={!!newUserState.error ? 'invalid' : 'valid'}
                        onChange={setEmail} label="E-mail" placeholder="john@doe.com" />}

                    {!!newUserState.error ? <span>E-mail already used.</span> : <></>}

                    <Button onPress={handleSubmit}
                        variant="primary" marginTop="size-100">Save</Button>
                </Form>
            </Flex>
        </>
    );
}
