import React, { useEffect, useLayoutEffect, useState,  } from "react";
import { FlatList, Text, View, TouchableHighlight, Image,TouchableOpacity ,SectionList} from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import { getDatabase, ref, child, get,set } from "firebase/database";
import app from '../../../firebase'
 const db = getDatabase(app); 
const dbRef = ref(db);

export default function HomeScreen(props) {
const [data, setData] = useState([]);
  async function getData(){
    get(child(dbRef, `fastfood`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  // useEffect(() => {
  //   const screenName = "Dashboard"; 
  
  //   set(ref(dbRef, "userScreen"), screenName)
  //     .then(() => {
  //       console.log("Firebase value updated successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Error updating Firebase value: ", error);
  //     });
  // }, []);

  useEffect(()=>{
    getData();
  },[])
  
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);
 
  

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="white" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
     <SectionList
  sections={[{ title: 'Section', data: data ,  }]}
  //horizontal={true}
  renderItem={({ item }) => (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: 'white',
          minWidth: 130,
          height: 90,
          margin: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginTop: 15,
          padding: 20,
          
        }}
      >
        <Image style={{ width: 70, height: 50, borderRadius: 4 }} source={{ uri: item.img }} />
        <Text style={{ fontWeight: 'bold', paddingLeft: 7 }}>{item.description}</Text>
        <Text style={{ fontWeight: 'bold', paddingLeft: 7 }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>{title}</Text>
  )}
/>
          

      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
      
    </View>
  );
}
