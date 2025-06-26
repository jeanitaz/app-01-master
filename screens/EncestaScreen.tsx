import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'

// RadioButton y Checkbox simples
const RadioButton = ({ label, selected, onPress }: any) => (
  <TouchableOpacity style={styles.radioRow} onPress={onPress}>
    <View style={[styles.radioCircle, selected && styles.radioSelected]} />
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onChange}>
    <View style={[styles.checkboxBox, checked && styles.checkboxChecked]} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function EncestaScreen() {
  const [contacto, setContacto] = useState('');
  const [recomienda, setRecomienda] = useState('');
  const [razon, setRazon] = useState('');
  const [permitirContacto, setPermitirContacto] = useState(false);
  const [valoracion, setValoracion] = useState(5);
  const [gustos, setGustos] = useState<string[]>([]);
  const [comentarios, setComentarios] = useState('');

  const opcionesRadio = ['Sí', 'No', 'Quizás'];
  const opcionesCheckbox = ['Diseño', 'Usabilidad', 'Rendimiento'];

  const toggleGusto = (gusto: string) => {
    setGustos(gustos.includes(gusto) ? gustos.filter(g => g !== gusto) : [...gustos, gusto]);
  };

  const handleSlider = (val: number) => setValoracion(val);

  const handleSubmit = () => {
    if (!contacto.trim() || !recomienda || !razon.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }
    Alert.alert('¡Gracias!', 'Encuesta enviada correctamente.');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.title}>Encuesta de Satisfacción</Text>

      <Text style={styles.label}>Contacto (obligatorio):</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu email o teléfono"
        value={contacto}
        onChangeText={setContacto}
      />

      <Text style={styles.label}>¿Recomendarías nuestra app?</Text>
      {opcionesRadio.map(op => (
        <RadioButton
          key={op}
          label={op}
          selected={recomienda === op}
          onPress={() => setRecomienda(op)}
        />
      ))}

      <Text style={styles.label}>¿Qué te gustó? (puedes elegir varios)</Text>
      {opcionesCheckbox.map(op => (
        <Checkbox
          key={op}
          label={op}
          checked={gustos.includes(op)}
          onChange={() => toggleGusto(op)}
        />
      ))}

      <Text style={styles.label}>Valoración (1 a 10): {valoracion}</Text>
      <View style={styles.sliderRow}>
        {[...Array(10)].map((_, i) => (
          <TouchableOpacity
            key={i + 1}
            style={[
              styles.sliderDot,
              valoracion === i + 1 && styles.sliderDotSelected,
            ]}
            onPress={() => handleSlider(i + 1)}
          >
            <Text style={styles.sliderDotText}>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Razón de la valoración (obligatorio):</Text>
      <TextInput
        style={styles.input}
        placeholder="Cuéntanos tu razón"
        value={razon}
        onChangeText={setRazon}
      />

      <Text style={styles.label}>Comentarios adicionales:</Text>
      <TextInput
        style={[styles.input, { height: 60 }]}
        placeholder="Comentarios"
        value={comentarios}
        onChangeText={setComentarios}
        multiline
      />

      <View style={styles.switchRow}>
        <Switch
          value={permitirContacto}
          onValueChange={setPermitirContacto}
        />
        <Text style={styles.switchLabel}>Permitir contacto para seguimiento</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Encuesta</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 18, textAlign: 'center', color: '#4f46e5' },
  label: { fontSize: 15, fontWeight: '500', marginTop: 12, marginBottom: 4 },
  input: { borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 8, padding: 10, fontSize: 16, marginBottom: 4 },
  radioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#4f46e5', marginRight: 8, justifyContent: 'center', alignItems: 'center' },
  radioSelected: { backgroundColor: '#4f46e5' },
  radioLabel: { fontSize: 15 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  checkboxBox: { width: 20, height: 20, borderWidth: 2, borderColor: '#4f46e5', marginRight: 8, borderRadius: 4, backgroundColor: '#fff' },
  checkboxChecked: { backgroundColor: '#4f46e5' },
  checkboxLabel: { fontSize: 15 },
  sliderRow: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  sliderDot: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: '#4f46e5', justifyContent: 'center', alignItems: 'center', marginHorizontal: 2, marginVertical: 2 },
  sliderDotSelected: { backgroundColor: '#4f46e5' },
  sliderDotText: { color: '#1e293b', fontWeight: 'bold' },
  switchRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  switchLabel: { marginLeft: 8, fontSize: 15 },
  button: { backgroundColor: '#4f46e5', borderRadius: 8, padding: 14, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});