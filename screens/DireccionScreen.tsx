import { ScrollView, StyleSheet, Text, TextInput, View, Switch, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

export const DireccionScreen = () => {
  const [registro, setRegistro] = useState({
    Calle: '',
    NúmeroEx: '',
    Ciudad: '',
    Referencias: '',
    esFiscal: false,
  });

  const [errors, setErrors] = useState({
    Calle: '',
    NúmeroEx: '',
    Ciudad: '',
    Referencias: '',
  });

  const handleChange = (field: string, value: any) => {
    setRegistro({ ...registro, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validar = () => {
    let valido = true;
    const newErrors = {
      Calle: '',
      NúmeroEx: '',
      Ciudad: '',
      Referencias: '',
    };

    if (!registro.Calle.trim()) {
      newErrors.Calle = 'Por favor ingresa tu calle';
      valido = false;
    }
    if (!registro.NúmeroEx.trim()) {
      newErrors.NúmeroEx = 'Por favor ingresa tu número exterior';
      valido = false;
    } else if (!/^\d+$/.test(registro.NúmeroEx)) {
      newErrors.NúmeroEx = 'El número exterior debe ser numérico';
      valido = false;
    }
    if (!registro.Ciudad.trim()) {
      newErrors.Ciudad = 'Por favor ingresa tu ciudad';
      valido = false;
    }

    setErrors(newErrors);
    return valido;
  };

  const handleSubmit = () => {
    if (validar()) {
      Alert.alert(
        'Dirección guardada',
        `¡Dirección registrada correctamente!\nFiscal: ${registro.esFiscal ? 'Sí' : 'No'}`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro De Dirección</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Calle</Text>
          <TextInput
            style={[styles.input, errors.Calle && styles.inputError]}
            placeholder="Ingresa tu calle"
            value={registro.Calle}
            onChangeText={value => handleChange('Calle', value)}
          />
          {errors.Calle ? <Text style={styles.errorText}>{errors.Calle}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>N°</Text>
          <TextInput
            style={[styles.input, errors.NúmeroEx && styles.inputError]}
            placeholder="Ingresa tu número de casa"
            value={registro.NúmeroEx}
            onChangeText={value => handleChange('NúmeroEx', value)}
            keyboardType="numeric"
          />
          {errors.NúmeroEx ? <Text style={styles.errorText}>{errors.NúmeroEx}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ciudad</Text>
          <TextInput
            style={[styles.input, errors.Ciudad && styles.inputError]}
            placeholder="Ingresa tu Ciudad"
            value={registro.Ciudad}
            onChangeText={value => handleChange('Ciudad', value)}
          />
          {errors.Ciudad ? <Text style={styles.errorText}>{errors.Ciudad}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Referencias</Text>
          <TextInput
            style={[styles.input, errors.Referencias && styles.inputError]}
            placeholder="Ingresa una Referencia (opcional)"
            value={registro.Referencias}
            onChangeText={value => handleChange('Referencias', value)}
          />
        </View>

        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={registro.esFiscal}
              onValueChange={value => handleChange('esFiscal', value)}
              thumbColor={registro.esFiscal ? '#4f46e5' : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#4f46e580' }}
            />
            <Text style={styles.switchLabel}>Es dirección fiscal</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar dirección</Text>
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