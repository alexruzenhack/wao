import React from 'react'
import {Flex, View} from '@adobe/react-spectrum';
import { Question } from './Question';
import gql from 'graphql-tag';
import { useQuery } from 'urql';

const ALL_QUESTIONS = gql`
{
  allQuestions {
    id
    content
    author { name }
  }
}
`;

export function QuestionList(props) {
    const [result] = useQuery({ query: ALL_QUESTIONS})
    const { data, fetching, error } = result

    if (fetching) return <div>Fetching</div>
    if (error) return <div>Error {error.message}</div>

    const allQuestions = data.allQuestions
    return (
        <Flex direction="column"
                gap="size-100"
                alignContent="center">
            { allQuestions.map(question => <Question key={question.id} {...question} />) }
        </Flex>
    );
}
