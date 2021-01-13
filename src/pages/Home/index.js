import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Shoes from '../../components/Shoes';

// import { Container } from './styles';

import Banner from '../../assets/images/banner.png';
import shoes1 from '../../assets/images/1.png';
import shoes2 from '../../assets/images/2.png';
import shoes3 from '../../assets/images/3.png';
import shoes4 from '../../assets/images/4.png';
import shoes5 from '../../assets/images/5.png';
import shoes6 from '../../assets/images/6.png';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Banner} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={styles.simboletext}> * </Text>
          <Text style={styles.subtext}> MASCULINO </Text>

          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={styles.itens}>
          <Shoes
            img={shoes1}
            cost="R$140,00"
            onClick={() => navigation.navigate('Detail')}>
            Nike Shox 10
          </Shoes>
          <Shoes
            img={shoes2}
            cost="R$260,00"
            onClick={() => navigation.navigate('Detail')}>
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={styles.itens}>
          <Shoes img={shoes3} cost="R$560,00" onClick={() => alert('CLICOU')}>
            Adidas Squidward Tentacles
          </Shoes>
          <Shoes img={shoes4} cost="R$220,00" onClick={() => alert('CLICOU')}>
            Adidas Epic React Flyknit 2
          </Shoes>
        </View>

        <View style={styles.itens}>
          <Shoes img={shoes5} cost="R$120,00" onClick={() => alert('CLICOU')}>
            Nike joyride Run Flynit
          </Shoes>
          <Shoes img={shoes6} cost="R$920,00" onClick={() => alert('CLICOU')}>
            Adidas Air Max
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

  header: {
    marginBottom: 8,
  },

  image: {
    width: '100%',
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text: {
    fontFamily: 'fantasy',
    fontSize: 26,
    marginHorizontal: '1%',
    fontWeight: 'bold',
  },

  subtext: {
    fontFamily: 'fantasy',
    fontSize: 26,
    marginHorizontal: '1%',
    fontWeight: 'bold',
    color: '#cececf',
  },

  simboletext: {
    fontFamily: 'fantasy',
    fontSize: 20,
    marginHorizontal: '1%',
    fontWeight: 'bold',
    color: '#cececf',
  },

  filterButton: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },

  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  },

  itens: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
