import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const teams = [
  {
    id: "1",
    name: "Scuderia Ferrari HP",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari",

  },
  {
    id: "2",
    name: "Mclaren F1 Team",
    image: "https://brandlogos.net/wp-content/uploads/2022/04/mclaren_formula_1_team-logo-brandlogos.net_.png",

  },
  {
    id: "3",
    name: "Mercedes-AMG Petronas Formula One Team",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes",
  },
  {
    id: "4",
    name: "Red Bull Racing",
    image: "https://brandlogo.org/wp-content/uploads/2024/04/Oracle-Red-Bull-Racing-Logo-300x300.png.webp",
  },
  {
    id: "5",
    name: "Aston Martin Aramco Formula One Team",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin",
  },
  {
    id: "6",
    name: "Stake F1 Team Kick Sauber",
    image: "https://www.sportmonks.com/wp-content/uploads/2024/03/kick-sauber-team-logo.png",

  },
  {
    id: "7",
    name: "Visa Cash App Racing Bulls Formula One Team",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/2018-redesign-assets/team%20logos/racing%20bulls",
  }, {
    id: "8",
    name: "MoneyGram Haas F1 Team",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/haas",
  },
  {
    id: "9",
    name: "BWT Alpine F1 Team",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine",
  },
  {
    id: "10",
    name: "Willians Racing",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/williams",
  },
];


export default function TeamsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipes</Text>
      <FlatList
        data={teams}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    elevation: 2,
  },
  img: {
    width: 270,
    height: 150,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
});