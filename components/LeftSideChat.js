import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'


export default LeftSideChat = () => {
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
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderWidth: 2,
        maxWidth: '85%',
        minHeight: '5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10
    }
})