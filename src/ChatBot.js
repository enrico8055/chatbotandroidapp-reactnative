import React, {useState, useCallback} from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; //library generate tampilan tempat chat
import Axios from 'axios'; //axios untuk hit api

export default Main = () =>{
  const [messages, setMessages] = useState([ //tampung chat
    {
      _id: 1,
      text: 'Do you have any question?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://img.icons8.com/plasticine/2x/bot.png',
      },
    },
  ]);

  const onSend = useCallback((messages = []) => { //fungsi trigger jika tombol send di klik, masukkan data time text dari user dll ke sini
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages)) //masukkan text dari user ke dalam variabel message, jadi bisa di tampilkan list chat sebelum nya

    // hit backend untuk dapatkan response, kirimkan text dari user ke back end
    Axios.get(`https://api-chat-bot-nlp.herokuapp.com/get/melothria/${messages[0].text}`)
    .then(result => { //kalo ada response maka....
                        setMessages(previousMessages => GiftedChat.append(previousMessages, { //masukkan responsenya ke dalam list message jadi bisa muncul, id di tambah satu dari id message sebelumnya
                          _id: previousMessages[0]._id + 1,
                          text: result.data.response,
                          createdAt: new Date(),
                          user: {
                            _id: previousMessages[0].user._id +1,
                            name: 'React Native',
                            avatar: 'https://img.icons8.com/plasticine/2x/bot.png',
                          },
                        })) 
                    })
    .catch(err => {console.log('err: ', err)}) //kalo proses hit ada error
    
  }, [])

  return (
    <GiftedChat
      messages={messages} // render data message ke layar
      onSend={messages => onSend(messages)} //kalo di klik send maka ambil text user masukkan ke funct onSend
      user={{
        _id: 1,
      }}
    />
  );
};
