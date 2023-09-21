import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
export default LeftSideImage = ({ lastText, img }) => {
    console.log(img, lastText)
    const source = require('../assets/adeel.png');
    return (
        <View style={{ flex: 1, flexDirection: 'row', gap: 15 }}>
            <Image style={{ maxWidth: "15%", maxHeight: "100%" }} source={source}>

            </Image>
            <View style={styles.container}>

                <Image style={{minWidth: '70%'}} source={source}>

                </Image>

                <View style={{ position: "absolute", bottom: -50, left: 200, backgroundColor: 'black', borderRadius: 5, width: '15%', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>

                    <AntDesign name="heart" size={18} color="red" />
                </View>

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
        
        
        
        maxWidth: '70%',
        minHeight: '5%',
        maxHeight: '30%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
        flex: 1,
        flexDirection: 'row',
        gap: 3,
    }
})