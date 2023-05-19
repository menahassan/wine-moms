import React, {useState} from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, Switch} from "react-native";


const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style = {styles.switchView}>
        <Text style= {styles.SwitchTitle}>Anonymous Post</Text>
        <Switch/>
      </View>
    );
  };

  const styles = StyleSheet.create({
    switchView: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: '#EFECEC',
      height: 40,
      width: '95%',
      padding: 5,
      borderRadius: 20
    },
    SwitchTitle:{
      fontSize: 17,
      color: '#7f7f7f',
      marginRight: 190,
      marginBottom: 5,
    },
  });
  
  export default ToggleSwitch;