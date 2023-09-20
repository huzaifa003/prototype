import { View, Text, ImageBackground, Image, SafeAreaView, TextInput, StyleS } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { minHeight, width } from '@mui/system';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default FooterChatBox = () => {
    return (
        <SafeAreaView style={{
            backgroundColor:
                "background: linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)",

            bottom: 0,
            position: 'absolute',
            width: '100%',
            maxHeight: '70%',



        }}>
            <View
                className="w-full pl-4  flex flex-row items-center pb-4 justify-between "
                style={{
                    backgroundColor:
                        "background: linear-gradient(164deg, rgba(24,24,32,0.8) 0%, rgba(37,37,54,0.2) 96%)",
                    width: '100%',
                    paddingTop: '4%',
                    justifyContent: 'space-evenly',
                    top: 0

                }}
            >
                <View className="flex flex-row justify-center  gap-3 " style={{ top: 0 }}>


                    <View className='flex flex-row ' style={{ top: 0 }} >



                        

                            <View style={{ flex: 1, flexDirection: 'row' }} className="gap-3">
                                <AntDesign name="pluscircleo" size={40} color='white' style={{}} />
                                <Image style={{ borderRadius: 15, width: '15%', height: 40, position: 'absolute', left: "13%" }} source={require('../assets/sn_logo-removebg-preview.png')}></Image>
                                <TextInput
                                    style={{ width: "40%", height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 20, fontSize: 18 }}

                                />

                                <FontAwesome style={{ height: 40, position: 'absolute', right: "45%"}} name="microphone" size={30} color="white" />


                                <Ionicons name="camera-outline" size={40} color="white" />
                                <Image style={{ borderRadius: 15, minHeight: '1%', width: '10%' }} source={require('../assets/userPic.png')}></Image>



                            </View>


                            {/* <View className="gap-3" style={{ flex: 0.4, flexDirection: 'row' }}>
                                
                            </View> */}
                        

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )


}

