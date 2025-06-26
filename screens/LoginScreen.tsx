import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function LoginScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt,{fontSize: 50}]}>Login</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Calculadora')}>
        <View style={styles.fila}>
        <Text style={styles.txt}>Ir a la calculadora</Text>
        <MaterialIcons name="calculate" size={50} color="white" />
        </View>
        <Image source={require('../assets/img/presupuesto.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3193e3',
        flex: 1,
    },
    txt:{
        color: '#fff',
        fontSize: 30
    },
    btn:{
        backgroundColor: '#4d4950',
        width: "80%",
        height: 150,
        alignItems: 'center',
        borderRadius: 50,
        padding: 20
    },
    img:{
        width: 100,
        height: 100,
        marginTop: 60
    },
    fila:{
        flexDirection: 'row-reverse',
    }
})