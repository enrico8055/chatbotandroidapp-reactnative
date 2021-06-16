import React from 'react';
import {Text, View, Image, ToastAndroid, Linking} from 'react-native'; 
import { Icon } from 'react-native-elements';

export default Main = () =>{
  return (
    <View style={{backgroundColor: "#618ab3", height: 50, elevation: 50}}>
      <Image source={{uri : 'https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png'}} style={{position:'absolute', width: 30, height: 30, top:7, left:10}}/>
      <Text style={{fontSize:17, color:'white', marginTop:10, marginLeft:45, fontWeight:'bold'}}>Melothria</Text>
      <View style={{marginTop: -21, marginLeft: 335}}>
        <Icon
          name='phone'
          size={25}
          color='#ffffff'
          onPress={()=>{
            // linking untuk connectkan ke aplikasi lain
            setTimeout(function(){
              Linking.openURL(`tel:081224670606`);
            }, 2000); 
            ToastAndroid.show("Calling Live CS....", ToastAndroid.LONG);}}
        />
      </View>
    </View>   
  );
};
