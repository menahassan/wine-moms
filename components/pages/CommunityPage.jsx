import { Text, ScrollView, Image, StyleSheet, FlatList, View} from "react-native";
import TopBar from "../elements/TopBar";

export default function CommunityPage({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>

      <Image style = {styles.image} source = {require('../../assets/arizona_mom.jpeg')}/>
      <View style ={styles.card}>
      <Text style={styles.communityTitle}>
        arizona
        <Text style={[styles.communityTitle, styles.boldText]}>moms</Text>
      </Text>
      <Text style = {styles.description}> Welcome! arizonamoms is a community for
      moms located in Arizona. Here are our community norms:
      </Text>
      </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '240%',
    },
    card: {
        backgroundColor: "#ECECEC",
        flexDirection: "column",
        height: "100%",
        marginTop: 0,
      },
    communityTitle: {
        color: "#000000",
        fontSize: 25,
        position: "absolute",
        left: 40,
        right: 0,
        top: 10,
      },
      boldText: {
        fontWeight: 600,
    },
    description:{
        color: "#000000",
        fontSize: 15,
        position: "absolute",
        left: 40,
        right: 0,
        top: 40,

    },
});
