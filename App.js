import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
export default function App() {
  const [text, setText] = useState('');
  const [data,setData] = useState()
  const img='https://www.flickr.com/photos/';

  const img2='/in/faves-198489148@N08';
  const url='https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=36a62c1071db26f4ac3b4563cd6c813a&user_id=198491715%40N06&extras=url_s&format=json&nojsoncallback=1';
  useEffect(() => {

    fetch(url
    )

        .then(response => response.json()) //  dinh nghia du lieu lay duoc la JSON
        .then(json => {

          setData(json.photos.photo)
          console.log(json.photos.photo)
        })
  },[])
  return (


      <View style={styles.container}>
        <Text style={styles.Text}>Favorite Images list</Text>

        <FlatList data={data} renderItem={({item,index})=>{
          return(<View>


            <img  src={item.url_s}></img>

            <Text style={styles.title}>{item.title}</Text>


          </View>)
        }}/>

        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  title:{
    alignSelf:'center',
    fontSize:20,
  },
  Text:{
    fontSize:40,
    marginTop:40,
  }
  ,tinyLogo: {
    width: 100,
    height: 200,
  },
  flatlist:{
    margin:10,
  },
});
