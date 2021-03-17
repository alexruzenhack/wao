import { Button, Flex, Form, TextField } from '@adobe/react-spectrum';
import React, { useContext, useState } from 'react'
import { UserContext } from '../Providers/UserProvider';

export function NewUser(props) {
    const userState = useContext(UserContext);

    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    const id = "teste";

    const handleSubmit = (e) =>{
        e.preventDefault();

        userState.identifyUser({id, email, name});
    }

    return (
        <Flex 
            direction="column"
            gap="size-100"
            alignItems="center"
            >
            {!name ? <h1>Hi!</h1> : <h1>Hi {name}!</h1>}
            
            <Form maxWidth="size-3600" onSubmit={handleSubmit} >
                <TextField onChange={setName} label="Name" placeholder="John Doe" />
                <TextField onChange={setEmail} label="E-mail" placeholder="john@doe.com" />
                <Button type="submit" onPress={(e) => e.target.click()}
                    variant="primary" marginTop="size-100">Save</Button>
            </Form>
        </Flex>
    );
}
