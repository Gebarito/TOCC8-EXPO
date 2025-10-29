import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [CPF, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");

  function gravar(){

  }

  function alterar(){
    
  }

  function remover(){
    
  }

  function listar(){
    
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
});
