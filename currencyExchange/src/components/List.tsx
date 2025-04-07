import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {currencyByRupee} from '../constants';
import CurrencyButton from './CurrencyButton';

const List = ({targetCurrency, buttonPressed}: ListProps) => {
  return (
    <View style={styles.bottomContainer}>
      <FlatList
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Pressable
            style={[
              styles.button,
              targetCurrency === item.name && styles.selected,
            ]}
            onPress={() => buttonPressed(item)}>
            <CurrencyButton {...item} />
          </Pressable>
        )}
        style={styles.flatListContainer}
      />
    </View>
  );
};

export default List;
