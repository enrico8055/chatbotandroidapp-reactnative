import React, {useEffect, useState} from 'react';
import { Button, Linking} from 'react-native';
import {Text, View, Image, ToastAndroid} from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'; //seperti cookie di bahasa pemrograman


export default Main = ({navigation, route}) =>{
  //kita ambil cookie yang terbentuk untuk menyapa user, karna cookie di set no telp user
  const [cookieValue, setcookieValue] = useState("")
  const cekCookie = async () => {
    setcookieValue(await AsyncStorage.getItem('cookieKey'))
  }

  // method jalan saat pertama komponen di mount
  useEffect(() => {
    cekCookie() //ambil cookie yang ada
  });

  return (
    // Navbar
    <View>
      <View style={{backgroundColor: "#618ab3", height: 50, elevation: 50}}>
      <View style={{marginTop: 10, marginLeft: 10, alignSelf:'baseline'}}>
        <Icon
          name='menu'
          size={30}
          color='#ffffff'
          onPress={()=>{
            navigation.openDrawer();
          }}
        />
      </View>
      <Image source={{uri : 'https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png'}} style={{position:'absolute', width: 30, height: 30, top:7, left:110}}/>
      <Text style={{fontSize:17, color:'white', marginTop:-29, marginLeft:140, fontWeight:'bold'}}>
        {/* tampilkan value cookienya */}
        Hi, {cookieValue}
      </Text>
      <View style={{marginTop: -21, marginLeft: 335}}>
        <Icon
          name='phone'
          size={25}
          color='#ffffff'
          onPress={()=>{
            setTimeout(function(){Linking.openURL(`tel:081224670606`);}, 2000); 
            ToastAndroid.show("Calling Live CS....", ToastAndroid.LONG);}}
        />
      </View>
    </View>   

    {/* isi */}
    <View  style={{alignItems: 'center'}}>
      <Image source={{uri : 'https://i.pinimg.com/originals/72/b8/37/72b837fd1445b2262993752accac89f3.png'}} style={{position:'absolute', width: 200, height: 200, top:180, left:90}}/>
      <Text style={{position:'absolute', top:380, fontSize:25}} >Melothria Shop</Text>
      <Text style={{position:'absolute', top:410, fontSize:10, fontStyle:'italic'}} >Fastest, Cheapest, High Integrity</Text>
      <View style={{marginTop:500}}>
        <Button
          onPress={()=>{
            navigation.navigate("E-CS");
            ToastAndroid.show("Hi Im Melo ....", ToastAndroid.LONG);
            }
          }
          title="   Ask More   "
          color="#7e7cf8"
        />
      </View>
    </View>
  </View>
  );
};
