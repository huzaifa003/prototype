import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';

const OTP = ({ navigation }) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        height:'auto'
      }}
      source={require('../assets/bgImage.png')}
    >
    
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <LinearGradient
          style={{
            width: '90%',
            height: '60%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#171717CC', '#1D1E24']}
        >
          <View>
          <Logo/>
            <Text style={{ opacity: 0.6, textAlign: 'center', color: '#D7D7D7', fontSize: 16, marginTop: 20, marginBottom: 20 }}>
              Enter the 4 Digits pin sent to you
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {[1, 2, 3, 4,5].map((index) => (
                <TextInput
                  key={index}
                  style={{
                    width: '15%',
                    borderWidth: 1,
                    borderColor: 'white',
                    color: 'white',
                    borderRadius: 5,
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                  keyboardType="numeric"
                />
              ))}
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('ChatList') }} style={{ marginTop: 20 }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#3f5efb', '#fc466b']}
                style={{ borderRadius: 10 }}
              >
                <Text style={{ color: 'white', padding: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={{ opacity: 0.8, fontWeight: '300', color: 'white', textAlign: 'center', padding:10, fontSize: 16 }}>
              Resend a New Pin
            </Text>
          </View>
        </LinearGradient>
        <Text style={{ color: 'white', marginTop: 20 }}>
          Already Have an Account?{' '}
          <Text style={{ color: '#ADD8E6', textDecorationLine: 'underline' }}>Sign Up</Text>
        </Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default OTP;
