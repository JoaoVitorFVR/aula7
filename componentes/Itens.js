import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Itens extends React.Component {
  static propTypes = { itens: PropTypes.array.isRequired };
  
  render() {
    return (
      <View style={styles.listaItens}>
        {this.props.itens.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.textItens}> {item.texto} </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listaItens: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  textItens: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
});

export default Itens;