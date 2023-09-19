import { View, Text,ImageBackground } from 'react-native'
import React from 'react'

const ChatList = ({navigation}) => {
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
         <Text >Chat List</Text>
    </ImageBackground>
  )
}

export default ChatList