import { ScrollView, View } from "react-native";
import PostCard from "../elements/PostCard";
import TopBar from "../elements/TopBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage({ navigation, setLoggedInUser, loggedInUser }) {
  const [posts, setPosts] = useState({});
  const HOSTNAME = "http://localhost:1337";

  useEffect(() => {
    // get data from backend again, because user object does not store relational data, including images
    axios
      .get(`${HOSTNAME}/api/posts?populate=*`)
      .then((response) => {
        let postsArr = response.data.data;
        for(let i = 0; i < postsArr.length; i ++){
          let likedByCurrentUser = false;
          for(let j = 0; j < postsArr[i].attributes.likedByUsers.data.length; j++){
            if(loggedInUser.user.id === postsArr[i].attributes.likedByUsers.data[j].id){
              likedByCurrentUser = true;
              break;
            }
          }
          postsArr[i].attributes["likedByCurrentUser"] = likedByCurrentUser;
        }
        setPosts(postsArr);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <ScrollView>
      <TopBar
        setLoggedInUser={setLoggedInUser}
        navigation={navigation}
      ></TopBar>
      {<View>
        {posts?.length > 0 ? (
          posts.map((post, index) => {
            return (
              <View key={index}>
                <PostCard navigation={navigation} postInfo={post.attributes} loggedInUser={loggedInUser}></PostCard>
              </View>
            );
          })
        ) : (
          <></>
        )}
        </View>}
    </ScrollView>
  );
}
