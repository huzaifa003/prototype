import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import Logo from "../components/Logo";
export default Home = () => {
  
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); 
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigation]);
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "102%",
        }}
        source={require("../assets/wallpaper.png")}
      >
        <View
          className="flex-1 items-center justify-top "
          style={{ maxHeight: "30%" }}
        >
 <Logo/>
        </View>
      
        <View
          className="flex-1 items-center justify "
          style={{ maxHeight: "20%" }}
        >
          <Text
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
            className="text-3xl antialiased text-white"
          >
            {" "}
            Easily Connect with your family, friends and work through skainet{" "}
          </Text>
          <Text className=' w-[100px] h-1 mt-7 bg-[#ffff]'></Text>
        </View>

        <View
          style={{
            marginLeft: "30%",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.9,
            borderColor: "blue",
            margin: 0,
            maxWidth: "40%",
          }}
        />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
