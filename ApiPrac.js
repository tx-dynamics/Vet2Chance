import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'

export default function ApiPrac() {

    useEffect(() => {
        // apiCall()
    }, [])

    const apiCall = () => {

        let data = {}
        data["userId"] = "61705c09afadb94c3cd4741b";


        fetch('https://nodefirstapiapp.herokuapp.com/users/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson))
                // console.log("sdsdsdsdsds", responseJson[0])
            })
            .catch((error) => {
                console.error(error);
            });



        // fetch('https://nodefirstapiapp.herokuapp.com/users/new', {
        //     method: 'GET'
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         alert(JSON.stringify(responseJson))
        //         // console.log("sdsdsdsdsds", responseJson[0])
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Pressable onPress={() => apiCall()}>
                <Text>Hello World</Text>
            </Pressable>
        </View>
    )
}
