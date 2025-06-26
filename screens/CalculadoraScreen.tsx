import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadoraScreen() {

    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)


    useEffect(() => {
        if(numero1 <= -5){
            setnumero1(-5)
        }

        if(numero1 >= 5){
            setnumero1(5)
        }

        if(numero2 <= -5){
            setnumero2(-5)
        }

        if(numero2 >= 5){
            setnumero2(5)
        }
    }, [numero1, numero2])
    
    function menos() {
        setnumero1(numero1 - 1)
    }

    function limpiar() {
        setnumero1(0)
        setnumero2(0)
    }

    function sumar(){
        let resultado = numero1 + numero2;
        Alert.alert("Resultado", 'El resultado es: ' + resultado, [
            {
                text: 'borrar',
                onPress: () => limpiar()
            },
            {
                text: 'Cancelar'
            }
        ]
    )
    }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 50}}>Calculadora</Text>
      
        <View style={styles.fila}>
        <Button title='-' onPress={menos} />
        <Text style={{fontSize: 40}}>{numero1}</Text>

        <Button title='+' onPress={() => setnumero1(numero1 + 1)} />
        <Text style={{fontSize: 40}}></Text>
        </View>

        <View style={styles.fila}>
            <Button title='-' color={'red'} onPress={() => setnumero2(numero2 - 1)}/>
            <Text style={{fontSize: 40}}> {numero2} </Text>
            <Button title='+' color={'green'} onPress={() => setnumero2(numero2 + 1)}/>
        </View>
    
    <View style={styles.linea}/>
        
        <Button title='Calcular' onPress={sumar}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linea:{
        backgroundColor: 'black',
        margin: 20,
        width: '50%',
        borderWidth: 1
    }
})