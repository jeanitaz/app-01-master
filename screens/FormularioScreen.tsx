import { ActivityIndicator, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-paper'

export const FormularioScreen = () => {
    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)
    const [visible, setvisible] = useState(false)

    const [datos, setdatos] = useState({"usuario": "", "edad": 0})

    function guardar() {
        
        if(usuario == ""){
            console.log("Ingrese un usuario")
        }

        setdatos({
            "usuario": usuario.trim(),
            "edad": edad
        })
    }

    return (
    <View style={styles.container}>
        <Text style={{fontSize: 50}}>Formulario</Text>

        <TextInput
        placeholder='Ingresar usuario'
        style={styles.input}
        onChangeText={(texto)=> setusuario(texto)}/>

        <TextInput
        placeholder='Ingresar edad'
        style={styles.input}
        onChangeText={(texto)=> setedad(+texto)}/>

        <Button title='Guardar' onPress={() => guardar}/>

        <View style={styles.linea}/>
        <Text>Ver Datos</Text>
            <Switch
                value={visible}
                onValueChange={()=> setvisible(!visible)}
            />
        <Divider/>
        {visible == true?
        <View>
            <Text style={styles.text}>Usuario: {datos.usuario}</Text>
            <Text style={styles.text}>Edad: {datos.edad}</Text>
        </View>
        :<ActivityIndicator size="large"/>}
    </View>
    )
}

export default FormularioScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        fontSize: 20,
        backgroundColor: '##53c3df',
        width: "60%",
        padding: 20
    },
    linea:{
        backgroundColor: 'black',
        margin: 20,
        width: '50%',
        borderWidth: 1
    },
    text:{
        fontSize: 20
    },
});