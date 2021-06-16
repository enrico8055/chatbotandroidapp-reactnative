import React, {useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHandler } from 'react-native';

export default Main = () =>{

  //fungsi dipanggil untuk menghapus semua cookie yang ada
  const deleteCookie = async () => {
    try {
      const value = await AsyncStorage.clear()
    } catch(e) {
    }
  }

  useEffect(() => {
    deleteCookie();
    BackHandler.exitApp() //begitu pencet logout langsung kick keluar app
  });

  return (
    <View>
    </View>
  );
};
