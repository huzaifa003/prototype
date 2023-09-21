import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'


export default LeftSideChatProfile = ({ lastText, img }) => {
    console.log(img, lastText)
    const source = require('../assets/adeel.png');
    return (
        <View style={{flex: 1, flexDirection : 'row', gap: 15}}>
            <Image style={{ width: "13%", height: "100%" }} source={source}>

            </Image>
            <View style={styles.container}>

                <Text style={{ color: 'white' }}>
                    {lastText}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#5F6368',
        borderColor: '#5F6368',
        borderWidth: 2,
        maxWidth: '70%',
        minHeight: '5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
        flex: 1,
        flexDirection: 'row',
        gap: 3,
    }
})