import { Button } from '@adobe/react-spectrum';
import { TextArea } from '@react-spectrum/textfield';
import { View } from '@react-spectrum/view';
import gql from 'graphql-tag';
import React, { useCallback, useState } from 'react'
import { useMutation } from 'urql';

const QUESTIONING_MUTATION = gql`
    mutation Questioning($content: String!, $authorId: String!) {
        questioning(data: {
            content: $content,
            authorId: $authorId
        }) {
            id
            content
            author {
            id
            }
        }
    }
`;

export function NewQuestion(props) {
    let [value, setValue] = useState('');
    let [questioningState, questioningMutation] = useMutation(QUESTIONING_MUTATION);

    const handleSend = useCallback(() => {
        if(!questioningState.fetching) {
            const result = questioningMutation({content: value, authorId: '88c1a534-84b2-4c5c-a1f8-81844bfab895'});
            result.then((response) => console.log('Operation result: ', response));
        }
    }, [questioningState, questioningMutation, value]);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            padding="size-250"
            >
            <TextArea value={value} onChange={setValue} 
                placeholder="What is your question?"
                inputMode="text"
                width="100%" />
            <Button onPress={handleSend}
                variant="primary" marginTop="size-100" >Send</Button>
        </View>
    );
}
