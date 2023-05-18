import React, { useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const DropdownComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const communities = [
    { label: 'yourmoms', value: 'your' },
    { label: 'chefmoms', value: 'chef' },
    { label: 'arizonamoms', value: 'arizona' }
  ];

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
        itemTextColor='#8F8F8F'
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
    backgroundColor: 'gray',
    // ... your other styles
  },
  searchInputStyle: {
    color: '#8F8F8F',
    height: 40,
  },
  dropdownMenu: {
    margin: 8,
    backgroundColor: '#EFECEC',
    borderRadius: 7,
  },
  itemsContainer: {
    maxHeight: 200,
    backgroundColor: '#EFECEC',
  },
  rowList: {
    backgroundColor: '#EFECEC',
  },
});

export default DropdownComponent;
