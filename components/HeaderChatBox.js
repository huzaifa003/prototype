import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default HeaderChatBox = () => {
  const navigation = useNavigation();
    return (
    <SafeAreaView style = {{backgroundColor:
            "background: linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)",
            height:'auto'
            
            }}>
      <View
        className="w-full pl-4  flex flex-row items-center pb-4 justify-between pr-4"
        style={{
          backgroundColor:
            "background: linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)"
        }}
      >
        <View className="flex flex-row justify-center items-center gap-3 ">
          <MaterialIcons onPress={() => { navigation.goBack(null) }} name="arrow-back" size={25} color="white" />
          <View className='flex flex-row items-center'>
            <Image style={{minHeight:'2%', width: '30%'}} source={require('../assets/userPic.png')}></Image>
            <Text className="text-white text-lg pl-3">Mr.Mike</Text>
          </View>
        </View>

      </View>
      </SafeAreaView>
    )
}