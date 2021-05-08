import React, {useState} from 'react'
import {View, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import {TextInput, Button} from 'react-native-paper'

export default function Create(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const createArticle = () => {
        fetch('http://192.168.43.176:80/api/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({title, description})
        })
        .then(() => props.navigation.navigate('Home'))
        .catch(error => Alert.alert('Error', error.toString()))
    }

    return (
        <KeyboardAvoidingView behavior='height'>
            <TextInput
                style={styles.input} 
                label='Title' 
                value={title} 
                mode='outlined'
                onChangeText={text => setTitle(text)} 
            />

            <TextInput
                style={styles.input}
                label='Description'
                value={description}
                mode='outlined'
                multiline
                numberOfLines={10}
                onChangeText={text => setDescription(text)}
            
            />

            <Button style={{margin: 10}}
                icon='pencil'
                mode='contained' 
                onPress={() => createArticle()}
                
            >Insert Article</Button>
                
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: { 
       margin: 10
    }
})