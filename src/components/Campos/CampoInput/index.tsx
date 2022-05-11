import { FormControl, Input } from "native-base";
import React from "react"
import { Control, Controller } from "react-hook-form"
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native"
import { CampoContainer } from "../../Container/CampoContainer";
import { MensagemErro } from "../../MensagemErro";

export interface CampoInputProps {
  // control: any;
  control: Control<any, any>;
  name: any;
  erro: any;
  placeholder: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  secureTextEntry?: boolean;
}

export function CampoInput2(props: CampoInputProps) {
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

/*
<CampoContainer>
  <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        style={styles.campo}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder="Telefone"
        keyboardType='phone-pad'
      />
    )}
    name="telefone"
  />
  {errors.telefone && <MensagemErro menssagem={errors.telefone.message} />}
</CampoContainer>
*/

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

export interface CampoInputProps {
  // control: any;
  control: Control<any, any>;
  name: any;
  placeholder: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  menssagem_erro?: string;
  secureTextEntry?: boolean;
  isInvalid?: boolean
}

export function CampoInput(props: CampoInputProps) {
  const { control, placeholder, editable, keyboardType,
    defaultValue, secureTextEntry, name, isInvalid, menssagem_erro } = props;
  return (
    <FormControl
      isRequired
      isInvalid={isInvalid}
      paddingY={2}
      paddingX={4}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            placeholder={placeholder}
            onChangeText={(val) => onChange(val)}
            value={value}
            variant="underlined"
            size="2xl"
            secureTextEntry={secureTextEntry}
            editable={editable}
            keyboardType={keyboardType}
          />
        )}
        name={name}
        rules={{ required: 'Campo vazio' }}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>
        <MensagemErro menssagem={menssagem_erro} />
      </FormControl.ErrorMessage>
    </FormControl>
  );
}


