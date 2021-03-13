import { Content } from '@adobe/react-spectrum';
import { View } from '@react-spectrum/view';
import React from 'react';

export function Question(props) {
    const { content } = props;
    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            padding="size-250"
            backgroundColor="gray-100"
            >
                <Content>{content}</Content>
        </View>
    );
}