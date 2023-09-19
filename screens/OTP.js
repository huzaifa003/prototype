import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";

const OTP = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
        }}
        source={require("../assets/bgImage.png")}
      >
        <View style={{height: '100%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}} className="w-[100%] h-[100%%] self-center"> 
          <LinearGradient
            className="w-[90%] h-[60%] place-content-center self-cente rounded-md shadow-sm  "
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#171717CC", "#1D1E24"]}
          >

            <View className="rounded-md  ">
              <Image
                style={{ alignSelf: "center" }}
                source={require("../assets/sn_logo-removebg-preview.png")}
              />

              <Text
                style={{ opacity: 0.6 }}
                className="text-center text-[#D7D7D7] mt-10 mb-10 text-lg"
              >
                Enter the 4 Digits pin sent to you
              </Text>
              <View style={{ flex: 1, flexDirection: 'row', minHeight: '15%', height: "20%", alignContent: 'center', alignSelf: 'center', flexBasis: 'auto', justifyContent: 'space-between' }}>
                <TextInput
                  style={{
                    maxHeight: '50%',
                    minHeight: '50%',
                    maxWidth: "15%",
                    borderWidth: 1,
                    borderColor: "white",
                    color: "white",

                  }}
                  className="bg-[#1D1D1F] text-white rounded-sm m-2 p-2 pl-5 "
                ></TextInput>

                <TextInput
                  style={{
                    maxHeight: '50%',
                    minHeight: '50%',
                    maxWidth: "15%",
                    borderWidth: 1,
                    borderColor: "white",
                    color: "white",
                  }}
                  className="bg-[#1D1D1F] text-white rounded-sm m-2 p-2 pl-5 "
                ></TextInput>

                <TextInput
                  style={{
                    maxHeight: '50%',
                    minHeight: '50%',
                    maxWidth: "15%",
                    borderWidth: 1,
                    borderColor: "white",
                    color: "white",
                  }}
                  className="bg-[#1D1D1F] text-white rounded-sm m-2 p-2 pl-5 "
                ></TextInput>

                <TextInput
                  style={{
                    maxHeight: '50%',
                    minHeight: '50%',
                    maxWidth: "15%",
                    borderWidth: 1,
                    borderColor: "white",
                    color: "white",
                  }}
                  className="bg-[#1D1D1F] text-white rounded-sm m-2 p-2 pl-5 "
                ></TextInput>



              </View>

              <TouchableOpacity onPress={() => { navigation.navigate('OTP') }} className=" rounded-md m-5  w-[50%] self-center ">
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#3f5efb", "#fc466b"]}
                >
                  <Text className="text-center text-white p-2 rounded-md">
                    Confirm
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <Text
                style={{ opacity: 0.8, fontWeight :'300', color: 'white' }}
                className="text-center  mb-10 text-md"
              >

                Resend a New Pin
              </Text>
            </View>


          </LinearGradient>


          <Text
            style={{ color: 'white' }}
            className = " mt-10"
          >

            Already Have an Account?  <Text style={{color : '#ADD8E6', backgroundColor : 'transparent', textDecorationLine: 'underline', textDecorationColor : '#ADD8E6'}}> Sign Up </Text>
          </Text>
        </View>
      </ImageBackground>
    </>


  );

}

export default OTP