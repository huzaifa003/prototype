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
import GroupChatHeader from '../components/GroupChatHeader';

const GroupChat = ({ route, navigation }) => {
    const user = route.params.user;
    console.log(user);
    return (
        <ImageBackground source={require('../assets/wallpaper.png')} style={{
            height: '100%'
        }}>

           <GroupChatHeader/>

            <ScrollView style={{ maxHeight: '80%' }}>
                <View style={{ flex: 1, flexDirection: 'column', gap: 30, paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                    {user.map((u, index) => {
                        // console.log(u.img);
                        return (
                            <>
                            
                            <RightSideChat msg = {"@Skainet.ai Tell me about this app"}/>
                                <LeftSideImage/>
                                <LeftSideButton/>
                                <LeftSideChatProfile {...u} />
                                
                            </>
                        )
                    })}


                </View>
            </ScrollView>

            <FooterChatBox />

        </ImageBackground>
    )
}

export default GroupChat