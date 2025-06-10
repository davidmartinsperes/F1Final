import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLoggedUser } from '../services/localAuth';

const pilots = [
  {
    id: '1',
    name: 'Charles Leclerc',
    team: 'Scuderia Ferrari',
    podiums: 46,
    wins: 8,
    nationality: 'Mônaco',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc',
  },
  {
    id: '2',
    name: 'Lewis Hamilton',
    team: 'Scuderia Ferrari',
    podiums: 202,
    wins: 105,
    nationality: 'Reino Unido',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton',
  },
  {
    id: '3',
    name: 'Lando Norris',
    team: 'Mclaren',
    podiums: 34,
    wins: 6,
    nationality: 'Reino Unido',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/norris'
  },

  {
    id: '4',
    name: 'Oscar Piastri',
    team: 'Mclaren',
    podiums: 18,
    wins: 7,
    nationality: 'Austrália',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/piastri',
  },
  {
    id: '5',
    name: 'George Russel',
    team: 'Mercedes',
    podiums: 19,
    wins: 3,
    nationality: 'Reino Unido',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/russell'
  },
  {
    id: '6',
    name: 'Kimi Antonelli',
    team: 'Mercedes',
    podiums: 0,
    wins: 0,
    nationality: 'Itália',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/antonelli'
  },

  {
    id: '7',
    name: 'Max Verstappen',
    team: 'Red Bull',
    podiums: 116,
    wins: 56,
    nationality: 'Holanda',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/verstappen'
  },

  {
    id: '8',
    name: 'Yuki Tsunoda',
    team: 'Red Bull',
    podiums: 0,
    wins: 0,
    nationality: 'Japão',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/tsunoda'
  },
  {
    id: '9',
    name: 'Isack Hadjar',
    team: 'Racing Bulls ',
    podiums: 0,
    wins: 0,
    nationality: 'França',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hadjar'
  },
  {
    id: '10',
    name: 'Liam Lawson',
    team: 'Racing Bulls ',
    podiums: 0,
    wins: 0,
    nationality: 'Nova Zelândia',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/lawson-racing-bulls'
  },
  {
    id: '11',
    name: 'Gabriel Bortoleto',
    team: 'Kick Sauber',
    podiums: 0,
    wins: 0,
    nationality: 'Brasil',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bortoleto'
  },
  {
    id: '12',
    name: 'Nico Hülkenberg',
    team: 'Kick Sauber',
    podiums: 0,
    wins: 0,
    nationality: 'Alemanha',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hulkenberg'
  },
  {
    id: '13',
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    podiums: 106,
    wins: 32,
    nationality: 'Espanha',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/alonso'
  },
  {
    id: '14',
    name: 'Lance Stroll',
    team: 'Aston Martin',
    podiums: 3,
    wins: 0,
    nationality: 'Canadá',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll'
  },
  {
    id: '15',
    name: 'Esteban Ocon',
    team: 'Haas F1 Team',
    podiums: 4,
    wins: 1,
    nationality: 'França',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bearman'
  },
  {
    id: '16',
    name: 'Oliver Bearman',
    team: 'Haas F1 Team',
    podiums: 0,
    wins: 0,
    nationality: '',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bearman'
  },
  {
    id: '17',
    name: 'Carlos Sainz',
    team: 'Williams',
    podiums: 27,
    wins: 4,
    nationality: 'Espanha',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/sainz'
  },
  {
    id: '18',
    name: 'Alexander Albon',
    team: 'Williams',
    podiums: 2,
    wins: 0,
    nationality: 'Tailândia',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/albon'
  },
  {
    id: '19',
    name: 'Pierre Gasly',
    team: 'Alpine',
    podiums: 5,
    wins: 1,
    nationality: 'França',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/gasly'
  },
  {
    id: '20',
    name: 'Franco Colapinto',
    team: 'Alpine',
    podiums: 0,
    wins: 0,
    nationality: 'Argentina',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/colapinto'
  },
];

export default function PilotsScreen({ navigation }) {
  const handleFavorite = async (pilot) => {
    const user = await getLoggedUser();
    if (!user) {
      Alert.alert('Atenção', 'Você precisa estar logado para favoritar um piloto!');
      return;
    }
    await AsyncStorage.setItem('@f1_favorite_driver', JSON.stringify(pilot));
    Alert.alert('Sucesso', 'Piloto salvo como favorito!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilotos</Text>
      <FlatList
        data={pilots}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PilotDetails', { pilot: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.team}>Equipe: {item.team}</Text>
              <TouchableOpacity style={styles.favBtn} onPress={() => handleFavorite(item)}>
                <Text style={styles.favBtnText}>Favoritar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    elevation: 2
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 16,
    borderTopLeftRadius: 2,
    borderEndEndRadius: 2,
    marginBottom: 8,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  team: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    textAlign: 'center'
  },
  favBtn: {
    marginTop: 17,
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 4
  },
  favBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19
  },
});