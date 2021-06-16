import React, {useState} from 'react';
import {Text, View, ScrollView, TextInput, Button, ToastAndroid} from 'react-native'; 
import Axios from 'axios'; //axios untuk hit api
import Loader from 'react-native-three-dots-loader'


export default Main = ({navigation, route}) =>{
  const [isLoading, setisLoading] = useState(false) 
  const [Phone, setPhone] = useState("")
  const [Password, setPassword] = useState("")

  return (
      <View>
        <View style={{marginTop: 250}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 40, fontWeight:'bold', marginBottom:10}}>SIGN UP</Text>
          </View>
          <TextInput
            onChangeText={(x)=>setPhone(x)}
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
              onPress={()=>{
                  if(Phone == null || Password == null || Phone.length < 11 || Phone.substr(0,1) != 8  || Number.isNaN(Phone) ){
                    ToastAndroid.show("Phone Number Or Password Not Valid! Dont Use 0!", ToastAndroid.LONG);
                  }else if(Password.length < 8){
                    ToastAndroid.show("Password To Short", ToastAndroid.LONG);
                  }else{
                    setisLoading(true)
                    Axios.get(`https://api-chat-bot-nlp.herokuapp.com/get/create/${Phone}/${Password}`)
                    .then(result => { //kalo ada response maka....
                                        if(result.data == "success"){
                                          ToastAndroid.show("Success", ToastAndroid.LONG);
                                          navigation.navigate("Login");
                                          setisLoading(false)
                                        }else{
                                          ToastAndroid.show("Already Use!", ToastAndroid.LONG);
                                          setisLoading(false)
                                        }
                                    })
                    .catch(err => {console.log('err: ', err)}) //kalo proses hit ada error
                  }
              }}
              title="SIGN UP"
              color="#618ab3"
            />
          </View>
          <View style={{alignItems:'flex-end', marginTop:20, marginRight:20}}>
            <Text onPress={()=>{
              navigation.navigate("Login")
            }}>Login</Text>
          </View>
          {/* menampilkan animasi loading */}
          {isLoading && <Loader/>}
        </View>
      </View>
  );
};
