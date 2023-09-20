import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/Logo";

const Login = ({navigation}) => {
  return (
    <ImageBackground 
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
      }}
      source={require("../assets/wallpaper.png")}
    >
      <View className="w-[100%]" style={{alignItems: 'center', alignContent: 'center'}}>
      <LinearGradient
        className="w-[90%] rounded-md shadow-sm  "
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#171717CC", "#1D1E24"]}
      >
        <View className=" w-[100%] rounded-md p-5 ">
         <Logo/>
          <Text
            style={{ opacity: 0.6 }}
            className="text-center text-[#D7D7D7] mt-10 mb-10"
          >
            Login to Your Account
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "rgba(152, 152, 159, 0.20)",
              color: "white",
            }}
            className="bg-[#1D1D1F] text-white rounded-sm m-2 p-2 pl-5 "
            placeholderTextColor="#D7D7D7"
            placeholder="Enter Email"
          ></TextInput>

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "rgba(152, 152, 159, 0.20)",
              color: "white",
            }}
            className="bg-[#1D1D1F] text-white rounded-sm mb-2 ml-2 mr-2 p-2 pl-5 "
            secureTextEntry={true}
            placeholderTextColor="#D7D7D7"
            placeholder="Enter Password"
          ></TextInput>

          <TouchableOpacity onPress={()=>{navigation.navigate('OTP')}} className=" rounded-md m-5  w-[50%] self-center ">
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#3f5efb", "#fc466b"]}
            >
              <Text className="text-center text-white font-bold text-xl  p-2 ">
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default Login;
