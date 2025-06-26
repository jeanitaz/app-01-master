import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function IMCScreen() {
  const [peso, setpeso] = useState(0);
  const [altura, setaltura] = useState(0);

  function calcular() {
    let imc = peso / (altura * altura);
    if (imc < 18.49) {
    } else if (imc >= 18.49 && imc <= 24.99) {
      Alert.alert("Su IMC es " + imc + " usted esta en un peso normal");
    } else if (imc >= 25 && imc <= 29.99) {
      Alert.alert("Su IMC es " + imc + " usted esta en sobrepesso");
    } else {
      Alert.alert("Su IMC es " + imc + " usted esta en obesidad leve");
    }}

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>IMC</Text>

        <Text style={{ fontSize: 15 }}>peso:</Text>
        <TextInput
          placeholder="escriba su peso"
          onChangeText={(texto) => setpeso(+texto)}
        />
        <Text style={{ fontSize: 15 }}>altura:</Text>
        <TextInput
          placeholder="escriba su altura"
          onChangeText={(altura) => setaltura(parseFloat(altura))}
        />
        <Button title="calcular" onPress={calcular} />

        
            {peso / (altura * altura) < 18.49
            ? <Text>Peso insuficinete</Text>
            : <Text>Peso aceptable</Text>
        
            }
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
  })