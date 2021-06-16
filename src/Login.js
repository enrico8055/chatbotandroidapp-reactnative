import React, {useState, useEffect} from 'react';
import {Text, Alert, View, TextInput, Button, ToastAndroid, ActivityIndicator, BackHandler} from 'react-native'; 
import Axios from 'axios'; //axios untuk hit api
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Main = ({navigation}) =>{
  //akan dipanggil saat kita berhasil login untuk membuat cookie
  const buatCookie = async () => {
    try {
      await AsyncStorage.setItem('cookieKey', Phone)
    } catch (e) {
    }
  }

  //kondisi apakah ada internet terdeteksi atau tidak
  const [isNoConnection, setisNoConnection] = useState(true)

  // method jalan saat ada perubahan komponen
  useEffect(() => {
    //untuk menghandle back button, kalo dipencet back akan muncul popup dan pilihannya langsung keluar aplikasi
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    
    // cek apakah ada internet
    NetInfo.fetch().then(state => {
      if (state.isConnected == false){
        Snackbar.show({
          text: 'Check Your Connection! Refresh App!',
          duration: Snackbar.LENGTH_LONG,
        })
      }else{
        setisNoConnection(false);
      }
    });
  });

  const [Phone, setPhone] = useState(null)
  const [Password, setPassword] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
      <View>
        <View style={{marginTop: 250}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 40, fontWeight:'bold', marginBottom:10}}>LOGIN</Text>
          </View>
          <TextInput
            onChangeText={(x)=>setPhone(x)}
            editable={!isNoConnection}
            placeholder="Phone Number"
            keyboardType="numeric"
            multiline={false}
            maxLength={11}
            style={{
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
              marginHorizontal: 40
            }}
            
          />
          <TextInput
            onChangeText={(x)=>setPassword(x)}
            editable={!isNoConnection}
            placeholder="Password"
            multiline={false}
            value={Password}
            secureTextEntry={true}
            style={{
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
              marginHorizontal: 40,
              marginBottom: 30
            }}
          />
          <View style={{marginHorizontal: 40}}>
            <Button
              // kalo gak ada internet disable tombolnya
              disabled={isNoConnection}
              onPress={()=>{
                // pastikan benar benar nomor telephon
                  if(Phone == null || Password == null || Phone.length < 11 || Phone.substr(0,1) != 8  || Number.isNaN(Phone) ){
                    ToastAndroid.show("Phone Number Or Password Not Valid!", ToastAndroid.LONG);
                  }else{
                    setIsLoading(true)
                    // hit api untuk autentifikasi
                    Axios.get(`https://api-chat-bot-nlp.herokuapp.com/get/auth/${Phone}/${Password}`)
                    .then(result => { //kalo ada response maka....
                                        if(result.data['response'] == "valid"){
                                          buatCookie()
                                          // kirim phone idnya
                                          navigation.navigate("MainPage", {
                                            phoneId: Phone
                                          });
                                          setIsLoading(false)
                                        }else{
                                          ToastAndroid.show("Phone Number Or Password Not Valid!", ToastAndroid.LONG);
                                          setIsLoading(false)

                                        }
                                    })
                    .catch(err => {console.log('err: ', err)}) //kalo proses hit ada error
                  }
              }}
              title="Login"
              color="#618ab3"
            />
          </View>
          <View style={{alignItems:'flex-end', marginTop:20, marginRight:20}}>
            <Text disabled={isNoConnection} onPress={()=>{
              navigation.navigate("SignUp")
            }}>Register</Text>
          </View>
          {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
      </View>
  );
};
