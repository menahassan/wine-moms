import React, {useState} from "react";
import { Text, StyleSheet, View, Switch} from "react-native";


const ToggleSwitch = ({ isEnabled, onToggle }) => {
    const toggleSwitch = () => {
      const newState = !isEnabled;
      onToggle(newState);
    };

    return (
        <View style = {styles.switchView}>
        <Text style= {styles.SwitchTitle}>Anonymous Post</Text>
        <Switch   onValueChange={toggleSwitch}
        value={isEnabled}/>
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