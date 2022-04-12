import React from "react"
import { Controller } from "react-hook-form"
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native"
import { CampoContainer } from "../../Container";

interface CampoInputProps {
  control: any;
  name: any;
  erro: any;
  placeholder: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  secureTextEntry?: boolean;
}

export function CampoInput(props: CampoInputProps) {
  return (
    <CampoContainer>
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.campo}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={props.placeholder}
            editable={props.editable}
            keyboardType={props.keyboardType}
            defaultValue={props.defaultValue}
            secureTextEntry={props.secureTextEntry}
          />
        )}
        name={props.name}
      />
      {props.erro}
    </CampoContainer>
  );
}

/* #Exemplo de utilização:
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

const styles = StyleSheet.create({
  campo: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: 25,
    color: 'gray',
  },
});