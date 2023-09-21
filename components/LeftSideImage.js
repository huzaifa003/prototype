import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
export default LeftSideImage = ({ lastText, img }) => {
    console.log(img, lastText)
    const source = require('../assets/ball.png');
    return (
        <View style={{ flex: 1, flexDirection: 'row', gap: 15 }}>
            <Image style={{ maxWidth: "15%", maxHeight: "40%" }} source={source}>

            </Image>
            <View style={styles.container}>

                <Image style={{minWidth: '70%'}} source={require('../assets/chatImg.png')}>

                </Image>
                    <AntDesign style={{position:'absolute' , right:-10 , bottom:-115 , backgroundColor:'black' , padding:10,borderRadius:10}} name="heart" size={18} color="red" />
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