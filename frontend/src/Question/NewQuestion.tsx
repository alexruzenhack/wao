import { Button, StatusLight } from '@adobe/react-spectrum';
import { TextArea } from '@react-spectrum/textfield';
import { View } from '@react-spectrum/view';
import gql from 'graphql-tag';
import React, { useCallback, useContext, useState } from 'react'
import { useMutation } from 'urql';
import { UserContext } from '../Providers/UserProvider';

const QUESTIONING_MUTATION = gql`
    mutation Questioning($content: String!, $authorId: String!) {
        questioning(data: {
            content: $content,
            authorId: $authorId
        }) {
            id
            content
            author { name }
        }
    }
`;

export function NewQuestion(props) {
    const userState = useContext(UserContext);
    const authorId = userState.user.id;

    let [question, setQuestion] = useState('');
    let [showStatus, setShowStatus] = useState(false);
    let [questioningState, questioningMutation] = useMutation(QUESTIONING_MUTATION);

    const handleSend = useCallback(() => {
        if(!questioningState.fetching) {
            const result = questioningMutation({content: question, authorId});
            result.then((response) => {
                setQuestion('');
            });
            setShowStatus(true);
            setTimeout(() => {
                setShowStatus(false);
            }, 2000);
        }
    }, [questioningState, questioningMutation, question, setQuestion, setShowStatus, authorId]);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            padding="size-250"
            >
            <TextArea value={question} onChange={setQuestion} 
                placeholder="What is your question?"
                inputMode="text"
                width="100%" />
            <Button onPress={handleSend}
                isDisabled={questioningState.fetching}
                variant="primary" marginTop="size-100" >Send</Button>
            {(!!questioningState.data && showStatus) && 
                <StatusLight variant="positive">Thank you! Question sent.</StatusLight>
            }
        </View>
    );
}
