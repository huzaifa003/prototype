import { View,Image, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 

const User = () => {
  return (
    <View style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
      <View style={{width:'100%', backgroundColor:'white',height:'0.5%'}}>
    <Text></Text>
   </View>
   <View style={{padding:9}}>
   <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
     <View style={{flex:1, flexDirection:'row',alignItems:'center' ,gap:45}}>
     <Image source={require('../assets/userPic.png')} />
      <Text className ='text-white font-bold text-xl'>Mr.Mike</Text>
     </View>
     
      <Text  className='text-white'>11/12/23</Text>
   </View>
   <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
    
     <View className='flex-1 flex-row justify-center gap-3 ' >
     <FontAwesome5  name="check-double" size={20} color="#3497F9" />
      <Text className='text-white'>Hi Sir How are you ?</Text>
     </View>
     
      <MaterialIcons  name='keyboard-arrow-right' size={24} color={'white'}></MaterialIcons>   
      </View>
   </View>
   <View style={{width:'100%', backgroundColor:'white',height:'0.5%'}}>
    <Text></Text>
   </View>
    </View>
  )
}

export default User