import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Button} from 'react-native-paper'
// Details of the title here.

export default function Details(props) {
    const data = props.route.params.data

    const deleteArticle = (data) => {
        fetch(`http://192.168.43.176:80/api/articles/${data.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => props.navigation.navigate('Home'))
        .catch(error => Alert.alert('Error', error.toString()))
    }
    return (
        <ScrollView>
            <View style={styles.view}>
                <Text style={{fontSize: 25}}>{data.title}</Text>
                <Text style={{fontSize: 20, marginTop: 10}}>{data.description}</Text>

                <View style={styles.btn}>
                    <Button
                        icon='update'
                        mode='contained'
                        onPress={() => props.navigation.navigate('Edit', {data})}
                    >Edit</Button>

                    <Button
                        icon='delete'
                        mode='contained'
                        onPress={() => deleteArticle(data)}
                    >Delete</Button>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        margin: 10
    },
    btn: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 10
    }
})