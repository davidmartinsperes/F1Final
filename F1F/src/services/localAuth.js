import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@f1_users';

export async function registerUser({ nome, email, senha, pais }) {
  const users = (await getUsers()) || [];
  if (users.find(u => u.email === email)) {
    throw new Error('E-mail já cadastrado!');
  }
  users.push({ nome, email, senha, pais });
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function loginUser(email, senha) {
  const users = (await getUsers()) || [];
  const user = users.find(u => u.email === email && u.senha === senha);
  if (!user) throw new Error('E-mail ou senha inválidos!');
  await AsyncStorage.setItem('@f1_logged_user', JSON.stringify(user));
  return user;
}

export async function logoutUser() {
  await AsyncStorage.removeItem('@f1_logged_user');
}

export async function getLoggedUser() {
  const user = await AsyncStorage.getItem('@f1_logged_user');
  return user ? JSON.parse(user) : null;
}

async function getUsers() {
  const users = await AsyncStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}