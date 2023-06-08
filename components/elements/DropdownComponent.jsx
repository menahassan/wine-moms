import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MultiSelect from "react-native-multiple-select";
import axios from "axios";

const DropdownComponent = ({ selectedItems, onSelectedItemsChange }) => {
  
  const [communities, setCommunities] = useState([]);

  const handleSelectedItemsChange = (newSelectedItems) => {
    onSelectedItemsChange(newSelectedItems);
  };

  const HOSTNAME = "https://shining-dogs-2af8207625.strapiapp.com";

  useEffect(() => {
    axios
      .get(`${HOSTNAME}/api/communities`)
      .then((response) => {
        let arr = [];
        response.data.data.map((community) =>
          arr.push({
            label: community.attributes.Name + "moms",
            value: community.id,
          })
        );
        setCommunities(arr);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const ItemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.container}>
      <MultiSelect
        items={communities}
        uniqueKey="value"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="  Select Communities"
        searchInputPlaceholderText="Search Communities"
        onChangeInput={(text) => console.log(text)} // Optional: onChangeInput for custom input handling
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#333"
        selectedItemTextColor="#333"
        selectedItemIconColor="#333"
        itemTextColor="#8F8F8F"
        displayKey="label"
        searchInputStyle={styles.searchInputStyle}
        submitButtonColor="#694066"
        submitButtonText="Submit"
        styleDropdownMenu={styles.dropdownMenu}
        styleItemsContainer={styles.itemsContainer}
        styleRowList={styles.rowList}
        ItemSeparatorComponent={ItemSeparator} // Add the ItemSeparatorComponent prop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    margin: 10,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "gray",
    // ... your other styles
  },
  searchInputStyle: {
    color: "#8F8F8F",
    height: 40,
  },
  dropdownMenu: {
    margin: 8,
    backgroundColor: "#EFECEC",
    borderRadius: 7,
  },
  itemsContainer: {
    maxHeight: 200,
    backgroundColor: "#EFECEC",
  },
  rowList: {
    backgroundColor: "#EFECEC",
  },
});

export default DropdownComponent;
