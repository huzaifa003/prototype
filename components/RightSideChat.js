import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'


export default RightSideChat = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>
                DADJAKDJAKDAJDAKDJKADJKAJKAJDKADJKAJK
                DADJAKDJAKDAJDAKDJKADJKAJKAJDKADJKAJK
                DADJAKDJAKDAJDAKDJKADJKAJKAJDKADJKAJK
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        maxWidth: '85%',
        minHeight: '5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomStartRadius: 10,
    }
})