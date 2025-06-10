import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>

        Sobre a Fórmula 1{' '}
        <MaterialCommunityIcons name="flag-checkered" size={24} color="#000" />{' '}
      </Text>
      <Text style={styles.text}>
        A Fórmula 1 é a categoria mais alta do automobilismo mundial. Ela é organizada pela FIA (Federação Internacional de Automobilismo) e reúne os carros de corrida mais rápidos, tecnologicamente avançados e sofisticados já criados. São verdadeiras máquinas de engenharia extrema, capazes de ultrapassar os 350 km/h, feitas para desafiar os limites do ser humano e da ciência.
      </Text>
      <Text style={styles.text}>
        A F1 é a referência máxima do automobilismo, e isso se dá por vários motivos:
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>• Inovação tecnológica:</Text> Muitas das tecnologias que hoje usamos em carros de rua — como freios ABS, controle de tração e sistemas híbridos — começaram nos carros da F1.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>• Formação de ídolos:</Text> Ayrton Senna, Michael Schumacher, Lewis Hamilton, Alain Prost... são nomes que transcenderam o esporte. Eles inspiraram gerações com sua coragem, técnica e carisma.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>• Exigência total:</Text> É onde só os melhores do mundo conseguem competir. Um erro de milésimos pode custar uma vitória. A exigência física e mental dos pilotos é absurda.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>• Engenharia de ponta:</Text> Cada equipe conta com centenas de engenheiros e profissionais que estudam aerodinâmica, mecânica, dados de telemetria e mais. É um laboratório móvel em forma de carro.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>• Legado histórico:</Text> A F1 registra momentos históricos — desde duelos lendários até tragédias que mudaram o esporte e levaram a mais segurança e humanidade.
        {"\n"}{"\n"}</Text>
      <Text style={styles.text}>
        A Fórmula 1 emociona porque, no fundo, ela fala sobre <Text style={{ fontWeight: 'bold' }}>superação dos limites.</Text> {"\n"}{"\n"}Ver um piloto acelerar fundo numa reta, ultrapassar com precisão cirúrgica numa curva de alta ou comemorar no pódio com lágrimas nos olhos... é difícil não se arrepiar.{"\n"}
        Ela nos lembra que há beleza no risco, que o talento precisa de esforço e que até as maiores vitórias vêm com dor, sacrifício e coragem.{"\n"}{"\n"} É por isso que tantas pessoas amam a F1, porque ali não se trata só de carros, mas de humanos desafiando o impossível.
        Quando você ouve o som de um motor F1 ecoando por um autódromo lotado, você não está apenas vendo uma corrida. Está sentindo a história sendo escrita diante dos seus olhos.
      </Text>
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
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify'
  },
});