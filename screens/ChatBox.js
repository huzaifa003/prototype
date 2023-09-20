import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import HeaderChatBox from '../components/HeaderChatBox';


const ChatBox = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{
      height: '100%'
    }}>

      <HeaderChatBox/>

      
    </ImageBackground>
  )
}

export default ChatBox