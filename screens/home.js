import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import {Card, FAB} from 'react-native-paper'





export default function Home(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    

    const renderItem = ({item}) => (
        <Card style={styles.card} onPress={() => props.navigation.navigate('Details', {data: item})}>
            <Text style={{fontSize: 25}}>{item.title}</Text>
        </Card>
    )


    const loadData = () => {
        fetch('http://192.168.43.176:80/api/articles/', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(error => Alert.alert("Error", error.toString()))
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={{ flex: 1}}>
            <FlatList
                renderItem={renderItem}
                data={data}
                onRefresh = {() => loadData()}

                refreshing = {loading}
                keyExtractor={item => item.id.toString()}
            />
            <FAB 
                style={styles.fab}
                icon='plus'
                small={false}
                theme={{colors: {accent: 'teal'}}}

                onPress={() => props.navigation.navigate('Create')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightgrey',
        marginHorizontal: 10,
        marginTop: 15,
        padding: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})