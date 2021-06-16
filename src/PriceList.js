import React, {useEffect, useState} from 'react';
import { SectionList, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import NavDrawer from './Drawer';
import Axios from 'axios'; //axios untuk hit api


export default Main = ({navigation}) =>{
  const [isLoading, setIsLoading] = useState(true)

  // tampung daftar layanan toko
  const [listData, setListData] = useState([])

  // method jalan saat ada  komponen pertama kali unmount
  // hit get list service
  useEffect(() => {
    Axios.get(`https://api-chat-bot-nlp.herokuapp.com/get/pricelist`)
    .then(result => { //kalo ada response maka....
                        setListData(result.data['list']);
                        setIsLoading(false);
                    })
    .catch(err => {setListData([
      {title: 'Check your connection !', data: ['...', '...']},
    ])}) //kalo proses hit ada error
  });

  return (
    <View>
      <NavDrawer/>
      <View  style={{alignItems: 'center'}}>
        <Text style={{fontWeight:'bold', fontSize:30, marginBottom:20, marginTop: 7}}>PRICE LIST</Text>
      </View>

      {/* menampilkan animasi loading */}
      {isLoading && <ActivityIndicator size="small" color="#0000ff" />}

      {/*menampilkan list ber section */}
      <SectionList
        sections={listData}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})