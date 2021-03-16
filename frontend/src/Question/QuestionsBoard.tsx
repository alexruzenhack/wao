import React from 'react';
import { NewQuestion } from './NewQuestion';
import { QuestionList } from './QuestionList';

export function QuestionsBoard(props) {
    return (
        <>
            <h1>Wrong Answers Only</h1>
            <NewQuestion />
            <QuestionList />
        </>
    );
}
