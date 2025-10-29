import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const API_URL = 'http://localhost:8080';

export default function App() {
  const [CPF, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [texto, setTexto] = useState("");

  async function gravar(){
    try {
      const response = await fetch(`${API_URL}/pessoa`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: CPF,
          nome: nome,
          peso: parseFloat(peso)
        })
      });
      const data = await response.json();
      setTexto(JSON.stringify(data, null, 2));
    } catch (error) {
      setTexto(`Erro ao gravar: ${error.message}`);
    }
  }

  async function alterar(){
    try {
      const response = await fetch(`${API_URL}/pessoa`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: CPF,
          nome: nome,
          peso: parseFloat(peso)
        })
      });
      const data = await response.json();
      setTexto(JSON.stringify(data, null, 2));
    } catch (error) {
      setTexto(`Erro ao alterar: ${error.message}`);
    }
  }

  async function remover(){
    try {
      const response = await fetch(`${API_URL}/pessoa`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: CPF,
          nome: nome,
          peso: parseFloat(peso)
        })
      });
      const data = await response.json();
      setTexto(JSON.stringify(data, null, 2));
    } catch (error) {
      setTexto(`Erro ao remover: ${error.message}`);
    }
  }

  async function listar(){
    try {
      const response = await fetch(`${API_URL}/pessoa`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setTexto(JSON.stringify(data, null, 2));
    } catch (error) {
      setTexto(`Erro ao listar: ${error.message}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro Pessoa</Text>
      <Text></Text>
      <View style={styles.linha}>
        <Text>Digite seu CPF:</Text>
        <TextInput style={styles.entrada} value={CPF} onChangeText={setCPF} />
      </View>
      <View style={styles.linha}>
        <Text>Digite seu nome:</Text>
        <TextInput style={styles.entrada} value={nome} onChangeText={setNome} />
      </View>
      <View style={styles.linha}>
        <Text>Digite seu peso:</Text>
        <TextInput style={styles.entrada} value={peso} onChangeText={setPeso} />
      </View>
      <Text></Text>
      <View style={styles.linha} >
        <Button title='Gravar' onPress={gravar} />
        <Button title='ALterar' onPress={alterar} />
        <Button title='Remover' onPress={remover} />
        <Button title='Listar' onPress={listar} />
      </View>
      <Text></Text>
      <ScrollView>
         <Text>{texto}</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginLeft: 10,
    width: 200,
  },
});
