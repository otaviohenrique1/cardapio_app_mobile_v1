import React from "react"
import { Controller } from "react-hook-form"
import { StyleSheet, TextInput } from "react-native"

interface CampoInputProps {
  control: any;
  name: any;
  erro: any;
}

export function CampoInput(props: CampoInputProps) {
  return (
    <>
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.campo}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {props.erro}
    </>
  );
}

const styles = StyleSheet.create({
  campo: {
    margin: 5,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  }
});

/*
#Exemplo de utilização:
  <Controller
    control={control}
    rules={{ required: true, }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
    name="email"
  />
  {errors.email && <Text>{errors.email.message}</Text>}
*/