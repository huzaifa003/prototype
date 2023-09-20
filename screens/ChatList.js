import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur"; // Import from "expo-blur"
import User from "../components/User";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

const ChatList = ({ navigation }) => {
  return (
    <ImageBackground
    source={require("../assets/wallpaper.png")}
    style={{ height: "100%", width: "100%", flex: 1 }}
  >
   
    {/* <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
        height: "100%",
        backgroundColor: "rgba(39,31,52,30)",
      }}
    > */}
      <View
        className="w-full pl-4 pt-6 flex flex-row items-center pb-4 justify-between pr-4"
        style={{
          backgroundColor:
            "background: linear-gradient(164deg, rgba(24,24,32,0.6) 0%, rgba(37,37,54,0.2) 96%)",
        }}
      >
        <View className="flex justify-center gap-3 pt-2">
          <Text className=" text-blue-600">Edit</Text>
          <Text className="text-white text-3xl">Chats</Text>
        </View>
        <MaterialIcons name="photo-camera" size={30} color="white" />
      </View>

     
        <MaterialIcons
          style={{
            position: "absolute",
            top: 133,
            left: 25,
            zIndex: 100,
          }}
          name="search"
          size={30}
          color="white"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 5,
            backgroundColor:
              "background: linear-gradient(164deg, rgba(24,24,32,1) 0%, rgba(37,37,54,1) 96%)",
            color: "white",
            fontSize: 16,
            paddingHorizontal: 8,
            width: "90%",
            padding: 6,
            alignSelf: "center",
            marginTop: 10,
            paddingStart: 40,
          }}
          placeholder="Search"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <ScrollView className="p-5 pl-2 pr-2 mt-5">
        <TouchableOpacity onPress={()=>{ navigation.navigate('ChatBox')}}> 
          <User></User>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('ChatBox')}}> 
          <User></User>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('ChatBox')}}> 
          <User></User>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('ChatBox')}}> 
          <User></User>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('ChatBox')}}> 
          <User></User>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            backgroundColor:
              "background: linear-gradient(164deg, rgba(24,24,32,0.5) 0%, rgba(37,37,54,1) 96%)",
            
          }}
          className=" h-15 p-5"
        >
          <View style={{ flexDirection:'row' , justifyContent:'space-between',alignItems:'center'}}>
          <FontAwesome5 name="user-alt" size={24} color="white" />
          <TouchableOpacity style={{
            borderColor:'white',
            borderWidth:1,
          }} className='bg-transparent rounded-3xl'>
          <View className='flex flex-row items-center pl-3'>
          <Ionicons name="add-circle" size={24} color="white" />
            <Text className='text-white p-3 pl-5 pr-5 '> 
            New Chat  </Text>
          </View>
           
          </TouchableOpacity>
          <Image source={require('../assets/userPic.png')}></Image>
          </View>
        </View>
      </ImageBackground>
    // </View>
    
  );
};

export default ChatList;
