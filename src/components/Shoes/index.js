import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Shoes = (props) => {
  function filterDesc(desc) {
    if (desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 15)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesPrice}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingVertical: '2%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  shoesImg: {
    width: 175,
    height: 175,
  },

  shoesText: {
    fontSize: 18,
  },
});

export default Shoes;
