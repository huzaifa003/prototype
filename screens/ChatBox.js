import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";

const ChatBox = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{
        height:'102%'
    }}>


    <View
    className="w-full pl-4 pt-8 flex flex-row items-center pb-4 justify-between pr-4"
    style={{
      backgroundColor:
        "background: linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)",
    }}
  >
    <View className="flex flex-row justify-center items-center gap-3 pt-2">
    <MaterialIcons onPress={()=>{navigation.goBack(-1)}} name="arrow-back" size={25} color="white" />
    <View className='flex flex-row items-center'>
    <Image source={require('../assets/userPic.png')}></Image>
      <Text className="text-white text-2xl pl-3">Mr.Mike</Text>
    </View>
    </View>
   
  </View>
  </ImageBackground>
  )
}

export default ChatBox