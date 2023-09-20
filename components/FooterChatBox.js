import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

export default FooterChatBox = () => {
  return (
    <SafeAreaView
      style={{
      position:'absolute',
      bottom:0,
        backgroundColor: "linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)",
      }}
    >
      <View
        style={{
          flex: 0,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          backgroundColor: "linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center",width:'90%' }}>
          <AntDesign name="pluscircleo" size={40} color="white" />
          <Image
            style={{
              borderRadius: 15,
              width: 40, // Adjust the size as needed
              height: 40, // Adjust the size as needed
              marginLeft: 10,
              position:'absolute',
              left:40
            }}
            source={require("../assets/ball.png")}
          />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 20,
              fontSize: 18,
              marginLeft: 10,
              marginRight:10,
              paddingHorizontal:40,
              color:'white'
            }}
          />
          <FontAwesome style={{padding:5}} name="microphone" size={30} color="white" />
          <Ionicons style={{padding:5}} name="camera-outline" size={40} color="white" />
        </View>

        <Image
          style={{
            borderRadius: 15,
            width: 40, // Adjust the size as needed
            height: 40, // Adjust the size as needed
            
          }}
          source={require("../assets/userPic.png")}
        />
      </View>
    </SafeAreaView>
  );
};
