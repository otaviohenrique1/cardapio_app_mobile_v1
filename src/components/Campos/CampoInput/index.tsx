import React from "react"
import { Controller } from "react-hook-form"
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native"
import { CampoContainer } from "../../Container/CampoContainer";

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
  const { control, placeholder, editable, keyboardType,
    defaultValue, secureTextEntry, name, erro } = props;
  const { campo } = styles;
    
  return (
    <CampoContainer>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={campo}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={name}
      />
      {erro}
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