import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { ref, push, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

export function TelaGravar() {
  const [texto, setTexto] = useState("");

  function salvar() {
    if (texto == "") {
      alert("Digite alguma coisa");
    } else {
      push(ref(database, "mensagens"), {
        texto: texto
      });

      setTexto("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gravar Dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

export function TelaLer() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const banco = ref(database, "mensagens");

    onValue(banco, (snapshot) => {
      const dados = snapshot.val();

      if (dados != null) {
        const lista = Object.keys(dados).map((id) => {
          return {
            id: id,
            texto: dados[id].texto
          };
        });

        setMensagens(lista);
      } else {
        setMensagens([]);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ler Dados</Text>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 15
  },
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10
  },
  texto: {
    fontSize: 18
  }
});