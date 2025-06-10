import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoriteDriverScreen() {
  const [pilot, setPilot] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('@f1_favorite_driver').then(data => {
      if (data) setPilot(JSON.parse(data));
    });
  }, []);

  if (!pilot) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nenhum piloto favorito selecionado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piloto Favorito</Text>
      <Image source={{ uri: pilot.image }} style={styles.img} />
      <Text style={styles.text}>Equipe: {pilot.team}</Text>
      <Text style={styles.text}>Nome: {pilot.name}</Text>
      <Text style={styles.text}>Nacionalidade: {pilot.nationality}</Text>
      <Text style={styles.text}>Vitórias: {pilot.wins}</Text>
      <Text style={styles.text}>Pódios: {pilot.podiums}</Text>
      <Text style={styles.caption}>Meu Piloto Favorito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
  img: {
    width: 220,
    height: 220,
    borderRadius: 110,

    marginVertical: 16,
    borderWidth: 2,
    borderColor: '#d00'
  },
  caption: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center'
  },
});