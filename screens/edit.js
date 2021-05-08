import React, {useState} from 'react'
import {StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import {TextInput, Button} from 'react-native-paper'

export default function Edit(props) {

    const data = props.route.params.data
    const [title, setTitle] = useState(data.title)
    const [description, setDescription] = useState(data.description)

    const update = () => {
        fetch(`http://192.168.43.176:80/api/articles/${data.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description})
        })
        .then(res => res.json())
        .then(data => props.navigation.navigate('Home', {data}))
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
                icon='update'
                mode='contained' 
                onPress={() => update()}
                
            >Save Changes</Button>
            
        </KeyboardAvoidingView>
    )
} 

const styles = StyleSheet.create({
    input: {
        margin: 10
    }
})