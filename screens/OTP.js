import { View, Text,ImageBackground } from 'react-native'
import React from 'react'

const OTP = ({navigation}) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
      }}
      source={require("../assets/bgImage.png")}
    >

        <Text onPress={()=>{navigation.navigate('ChatList')}}>OTP</Text>
    </ImageBackground>
  )
}

export default OTP