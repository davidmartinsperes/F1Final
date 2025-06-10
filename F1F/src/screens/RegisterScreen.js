import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { registerUser } from '../services/localAuth';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', pais: '' });
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .map(c => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sorted);
        setLoadingCountries(false);
      })
      .catch(() => setLoadingCountries(false));
  }, []);

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const handleRegister = async () => {
    const { nome, email, senha, pais } = form;
    if (!nome || !email || !senha || !pais) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    setLoading(true);
    try {
      await registerUser({ nome, email, senha, pais });
      Alert.alert('Sucesso', 'Cadastro realizado! Faça login para continuar.');
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    } catch (err) {
      Alert.alert('Erro', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-formula-1-logoformula-1logonew2018-21529676510t61kq.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Cadastro F1 Lively</Text>
      <TextInput style={styles.input} placeholder="Nome" value={form.nome} onChangeText={t => handleChange('nome', t)} />
      <TextInput style={styles.input} placeholder="Email" value={form.email} onChangeText={t => handleChange('email', t)} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={form.senha} onChangeText={t => handleChange('senha', t)} secureTextEntry />

      <Text style={{ marginBottom: 4, marginTop: 8 }}>País</Text>
      {loadingCountries ? (
        <ActivityIndicator size="small" color="#d00" />
      ) : (
        <Picker
          selectedValue={form.pais}
          onValueChange={value => handleChange('pais', value)}
          style={styles.input}
        >
          <Picker.Item label="Selecione seu país" value="" />
          {countries.map(country => (
            <Picker.Item key={country} label={country} value={country} />
          ))}
        </Picker>
      )}

      <Button title={loading ? 'Cadastrando...' : 'Cadastrar'} color="#d00" onPress={handleRegister} disabled={loading} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem cadastro? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12
  },
  link: {
    color: '#d00',
    marginTop: 10,
    textAlign: 'center'
  },
});