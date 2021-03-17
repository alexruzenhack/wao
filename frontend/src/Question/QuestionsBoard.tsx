import { Content, Flex } from '@adobe/react-spectrum';
import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { NewQuestion } from './NewQuestion';
import { QuestionList } from './QuestionList';

export function QuestionsBoard(props) {
    const userState = useContext(UserContext);
    return (
        <Flex 
            direction="column"
            gap="size-100"
            alignContent="center"
            >
            <h1>Wrong Answers Only</h1>
            <Content>{userState.user.name}</Content>
            <NewQuestion />
            <QuestionList />
        </Flex>
    );
}
