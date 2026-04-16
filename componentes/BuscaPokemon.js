import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";

class BuscaPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      pokemon: "lucario",
    };
    this.fetchDados = this.fetchDados.bind(this);
  }

  fetchDados() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon.toLowerCase()}`)
      .then((response) => response.json())
      .then((json) => this.setState({ dados: json }))
      .catch((err) => {
        alert("Pokémon não encontrado!");
        this.setState({ dados: {} });
      });
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    const { name, weight, height, sprites, id} = this.state.dados;

    const exibirDetalhes = this.props.detalhado;

    return (
      <View style={estilos.container}>
        <Text style={estilos.font30}>Dados do Pokémon</Text>
        {name ? (
          <View style={estilos.infoContainer}>
            <Text style={estilos.texto}>Nome: {name.toUpperCase()}</Text>
            <Text style={estilos.texto}>ID: {id}</Text>

            {exibirDetalhes ? (
              <View style={{alignItems: 'center'}}>
                <Text style={estilos.texto}>Peso: {weight} kg</Text>
                <Text style={estilos.texto}>Altura: {height} m</Text>
              </View>
            ) : null}

            {sprites && (
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: sprites.front_default }}
                  style={{ width: 100, height: 100, marginRight: 10 }}
                />
              {exibirDetalhes && (
                <Image
                  source={{ uri: sprites.front_shiny }}
                  style={{ width: 100, height: 100 }}
                />
              )}
              </View>
          )}
          </View>
        ) : (
          <Text>Busque um Pokémon para ver os detalhes</Text>
        )}

        <View>
          <TextInput
            style={estilos.input}
            placeholder="Digite o nome do Pokémon"
            onChangeText={(pokemon) => {
              this.setState({ pokemon });
            }}
            value={this.state.pokemon}
          ></TextInput>
        </View>

        <View style={estilos.buttonContainer}>
          <Button
            onPress={this.fetchDados}
            title="Buscar Pokémon"
            color="#ef5350"
          />
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  font30: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginVertical: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 15,
    width: 250,
  },
});

export default BuscaPokemon;