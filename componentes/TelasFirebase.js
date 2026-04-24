import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ref, push, onValue, off } from "firebase/database";
import { db1 } from "../firebaseConfig";
import Itens from "./Itens.js";

export function TelaGravar() {
  const [texto, setTexto] = React.useState("");

  function salvar() {
    if (texto !== "") {
      push(ref(db1, "/mensagens"), { texto: texto });
      setTexto("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gravar Dados</Text>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite algo"
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

export class TelaLer extends React.Component {
  state = {
    itens: [],
  };

  componentDidMount() {
    this.itensRef = ref(db1, "/mensagens");
    this.unsubscribe = onValue(this.itensRef, (snapshot) => {
      const data = snapshot.val();
      const itens = data ? Object.values(data) : [];
      this.setState({ itens });
    });
  }

  componentWillUnmount() {
    if (this.itensRef) {
      off(this.itensRef);
    }
  }

  render() {
    const { itens } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Ler Dados</Text>
        {itens.length > 0 ? (
          <Itens itens={itens} />
        ) : (
          <Text style={{textAlign: 'center'}}>Não há itens salvos</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  titulo: { fontSize: 25, fontWeight: "bold", textAlign: "center", marginBottom: 20 , borderColor: black},
  input: { borderWidth: 1, borderColor: "gray", padding: 10, marginBottom: 15 }
});
