import { Alert, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export const RegitroUsuarioScreen = () => {
  const [registro, setRegistro] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    confirmarcontrasena: '',
    telefono: '',
    aceptaTerminos: false,
    subscribeNewsletter: false,
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contrasena: '',
    confcontrasena: '',
    aceptaTerminos: '',
  });

  const handleChange = (field: string, value: any) => {
    setRegistro({ ...registro, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validar = () => {
    let validar = true;
    const newErrors = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      contrasena: '',
      confcontrasena: '',
      aceptaTerminos: '',
    };

    if (!registro.nombre.trim()) {
      newErrors.nombre = 'Por favor ingresa tu nombre';
      validar = false;
    }
    if (!registro.apellido.trim()) {
      newErrors.apellido = 'Por favor ingresa tu apellido';
      validar = false;
    }
    if (!registro.email.trim()) {
      newErrors.email = 'Por favor ingresa tu email';
      validar = false;
    }
    if (!registro.telefono.trim()) {
      newErrors.telefono = 'Por favor ingresa tu teléfono';
      validar = false;
    } else if (!/^\d+$/.test(registro.telefono)) {
      newErrors.telefono = 'El teléfono debe ser numérico';
      validar = false;
    }
    if (!registro.contrasena) {
      newErrors.contrasena = 'Por favor ingresa tu contraseña';
      validar = false;
    }
    if (!registro.confirmarcontrasena) {
      newErrors.confcontrasena = 'Por favor confirma tu contraseña';
      validar = false;
    } else if (registro.contrasena !== registro.confirmarcontrasena) {
      newErrors.confcontrasena = 'Las contraseñas no coinciden';
      validar = false;
    }
    if (!registro.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
      validar = false;
    }

    setErrors(newErrors);
    return validar;
  };

  const handleSubmit = () => {
    if (validar()) {
      Alert.alert(
        'Registro exitoso',
        '¡Gracias por registrarte!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro De Usuario</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={[styles.input, errors.nombre && styles.inputError]}
            placeholder="Ingresa tu nombre"
            value={registro.nombre}
            onChangeText={value => handleChange('nombre', value)}
          />
          {errors.nombre ? <Text style={styles.errorText}>{errors.nombre}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={[styles.input, errors.apellido && styles.inputError]}
            placeholder="Ingresa tu apellido"
            value={registro.apellido}
            onChangeText={value => handleChange('apellido', value)}
          />
          {errors.apellido ? <Text style={styles.errorText}>{errors.apellido}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Ingresa tu email"
            value={registro.email}
            onChangeText={value => handleChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={[styles.input, errors.telefono && styles.inputError]}
            placeholder="Ingresa tu teléfono"
            value={registro.telefono}
            onChangeText={value => handleChange('telefono', value)}
            keyboardType="numeric"
          />
          {errors.telefono ? <Text style={styles.errorText}>{errors.telefono}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={[styles.input, errors.contrasena && styles.inputError]}
            placeholder="Ingresa tu contraseña"
            value={registro.contrasena}
            onChangeText={value => handleChange('contrasena', value)}
            secureTextEntry
          />
          {errors.contrasena ? <Text style={styles.errorText}>{errors.contrasena}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            style={[styles.input, errors.confcontrasena && styles.inputError]}
            placeholder="Confirma tu contraseña"
            value={registro.confirmarcontrasena}
            onChangeText={value => handleChange('confirmarcontrasena', value)}
            secureTextEntry
          />
          {errors.confcontrasena ? <Text style={styles.errorText}>{errors.confcontrasena}</Text> : null}
        </View>

        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={registro.aceptaTerminos}
              onValueChange={value => handleChange('aceptaTerminos', value)}
              thumbColor={registro.aceptaTerminos ? '#4f46e5' : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#4f46e580' }}
            />
            <Text style={styles.switchLabel}>Acepto los términos y condiciones</Text>
          </View>
          {errors.aceptaTerminos ? <Text style={styles.errorText}>{errors.aceptaTerminos}</Text> : null}
        </View>
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={registro.subscribeNewsletter}
              onValueChange={value => handleChange('subscribeNewsletter', value)}
              thumbColor={registro.subscribeNewsletter ? '#4f46e5' : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#4f46e580' }}
            />
            <Text style={styles.switchLabel}>Suscribirme a Newsletter</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#1e293b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  switchContainer: {
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4f46e5',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})