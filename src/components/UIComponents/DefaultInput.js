import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const DefaultInput = props => (
    <TextInput 
    underlineColorAndroid="transparent"
    {...props} 
    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]} 
    />
)

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        margin: 8
    },
    invalid: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey'
    }
})

export default DefaultInput