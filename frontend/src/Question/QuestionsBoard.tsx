import { Flex } from '@adobe/react-spectrum';
import React from 'react';
import { NewQuestion } from './NewQuestion';
import { QuestionList } from './QuestionList';

export function QuestionsBoard(props) {
    return (
        <Flex 
            direction="column"
            gap="size-100"
            alignContent="center"
            >
            <h1>Wrong Answers Only</h1>
            <NewQuestion />
            <QuestionList />
        </Flex>
    );
}
