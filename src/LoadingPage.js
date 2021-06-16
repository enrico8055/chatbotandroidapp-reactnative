import React, {useEffect} from 'react';
import {View, ActivityIndicator, Image, ToastAndroid,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Main = ({navigation}) =>{
  // fungsi dipanggil untuk cek appakah ada cookie? kalo ada lempar ke mainPage/ kalo gk ada ke Login
  const cekCookie = async () => {
    try {
      const value = await AsyncStorage.getItem('cookieKey')
      if(value == null) {
        navigation.navigate("Login")
      }else{
        ToastAndroid.show("Already Login", ToastAndroid.SHORT);
        navigation.navigate("MainPage")
      }
    } catch(e) {
    }
  }
  
  //method pertama saat komponen di mount
  useEffect(() => {
    setTimeout(function(){ 
      cekCookie(); //pengecekan cookie
    }, 700);
  }, [])

  return (
    <View style={{alignItems: 'center', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
        <Image source={{uri : 'https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png'}} style={{width: 100, height: 100}}/>
        <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};
