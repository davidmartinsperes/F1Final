import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PilotDetailsScreen({ route }) {
  const { pilot } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: pilot.image }} style={styles.img} />
      <Text style={styles.name}>{pilot.name}</Text>
      <Text style={styles.team}>Equipe: {pilot.team}</Text>
      <Text style={styles.info}>Nacionalidade: {pilot.nationality}</Text>
      <Text style={styles.info}>Vitórias: {pilot.wins}</Text>
      <Text style={styles.info}>Pódios: {pilot.podiums}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  team: {
    fontSize: 18,
    marginBottom: 4
  },
  info: {
    fontSize: 16,
    marginBottom: 2
  },
});