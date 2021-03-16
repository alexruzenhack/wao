import { Form, TextField } from '@adobe/react-spectrum';
import React from 'react'

export function NewUser(props) {

    return (
        <Form maxWidth="size-3600">
            <TextField label="E-mail" placeholder="john@doe.com" />
            <TextField label="Name" placeholder="John Doe" />
        </Form>
    );
}
