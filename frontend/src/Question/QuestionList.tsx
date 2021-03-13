import React from 'react'
import {Flex, View} from '@adobe/react-spectrum';
import { Question } from './Question';

export function QuestionList(props) {
    const allQuestions = [
        {question: "Why there is rings in saturn?"},
        {question: "Why there is rings in saturn?"},
        {question: "Why there is rings in saturn?"},
    ];
    return (
        <Flex direction="column"
                gap="size-100"
                alignContent="center">
            { allQuestions.map(question => <Question {...question} />) }
        </Flex>
    );
}
