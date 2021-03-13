import { Button } from '@adobe/react-spectrum';
import { TextArea } from '@react-spectrum/textfield';
import { View } from '@react-spectrum/view';
import React from 'react'

export function NewQuestion(props) {
    let [value, setValue] = React.useState('');
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
            <Button variant="primary" marginTop="size-100" >Save</Button>
        </View>
    );
}
