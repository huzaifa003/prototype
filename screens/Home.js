import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default Home = () => {
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        source={require("../assets/bgImage.png")}
      >
        <View
          className="flex-1 items-center justify-top "
          style={{ maxHeight: "30%" }}
        >
          <Image
            source={require("../assets/skainetLogo-removebg-preview.png")}
          />

          <StatusBar style="auto" />
        </View>

        <View
          className="flex-1 items-center justify"
          style={{ maxHeight: "20%" }}
        >
          <Text
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
            className="text-3xl antialiased text-white"
          >
            {" "}
            Easily Connect with your family, friends and work through skainet{" "}
          </Text>
          <Text className=' w-[100px] h-1 mt-7 bg-[#1B97DD]'></Text>
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
