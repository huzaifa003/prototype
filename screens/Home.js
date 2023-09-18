import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default Home = () => {
  return (
    <>
      <LinearGradient colors={['#ef32d9', '#89fffd']} style={{ height: '100%' }}>
        <Text />
        <Text />
        <Text />

        <View className="flex-1 items-center justify-top " style={{maxHeight: "30%"}}>
          <Image source={require('../assets/skainetLogo-removebg-preview.png')} />

          <StatusBar style="auto" />
        </View>

        <View className="flex-1 items-center justify" style={{maxHeight: "20%"}}>
          <Text style={{ paddingLeft: '10%', paddingRight: '10%' }} className="text-3xl antialiased"> Easily Connect with your family, friends and work through skainet </Text>
          <Text></Text>
        
          
        </View>

        <View
            style={{
              marginLeft: '30%',
              alignItems : 'center',
              justifyContent: 'center',
              borderWidth: 0.9,
              borderColor: 'blue',
              margin: 0,
              maxWidth: "40%"
            }}
          />



      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});