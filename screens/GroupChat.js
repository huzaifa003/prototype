import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import HeaderChatBox from '../components/HeaderChatBox';
import FooterChatBox from '../components/FooterChatBox';
import LeftSideChat from '../components/LeftSideChat';
import RightSideChat from '../components/RightSideChat';
import LeftSideChatProfile from '../components/LeftSideChatProfile';
import LeftSideImage from '../components/LeftSideImage';
import LeftSideButton from '../components/LeftSideButton';

const GroupChat = ({ route, navigation }) => {
    const user = route.params.user;
    console.log(user);
    return (
        <ImageBackground source={require('../assets/wallpaper.png')} style={{
            height: '100%'
        }}>

            <HeaderChatBox />


            <ScrollView style={{ maxHeight: '75%' }}>
                <View style={{ flex: 1, flexDirection: 'column', gap: 30, paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                    {user.map((u, index) => {
                        // console.log(u.img);
                        return (
                            <>
                                <LeftSideImage/>
                                <LeftSideButton/>
                                <LeftSideChatProfile {...u} />
                                
                                <RightSideChat msg = {"XYZYSASYAYYYACYZZ\nCAHJHAJHJHAHJH"}/>
                            </>
                        )
                    })}

                    {/* <LeftSideChat msg={'Hi how are you ?'} />
                    <RightSideChat msg={'Hi ! I am fine '} />
                    <RightSideChat msg={'What about you ?'} />
                    <LeftSideChat msg={'I am doing well'} /> */}




                </View>
            </ScrollView>

            <FooterChatBox />

        </ImageBackground>
    )
}

export default GroupChat