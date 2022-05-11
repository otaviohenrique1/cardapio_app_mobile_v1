import { Picker } from "@react-native-picker/picker";
import { Box, Center, CheckIcon, FormControl, Select, WarningOutlineIcon } from "native-base";
import React from "react"
import { Controller } from "react-hook-form"
import { StyleSheet } from "react-native"
import { CampoContainer } from "../../Container/CampoContainer";
import { MensagemErro } from "../../MensagemErro";

interface DataTypes {
  valor: string;
  texto: string;
}

type modeTypes = "dialog" | "dropdown";

export interface CampoSelect2Props {
  control: any;
  name: any;
  erro: any;
  mode?: modeTypes
  label_campo_selecione: string;
  data: DataTypes[];
}

export function CampoSelect2(props: CampoSelect2Props) {
  const { control, label_campo_selecione,
    data, name, erro } = props;
  const { campo_select, campo_select_item } = styles;


  return (
    <CampoContainer>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => { onChange(itemValue) }}
            onBlur={onBlur}
            style={campo_select}
            itemStyle={campo_select_item}
          >
            <Picker.Item label={label_campo_selecione} value="" />
            {data.map((item, index) => {
              const { texto, valor } = item;

              return (
                <Picker.Item
                  style={campo_select_item}
                  label={texto}
                  value={valor}
                  key={index}
                />
              );
            })}
          </Picker>
        )}
        name={name}
      />
      {erro}
    </CampoContainer>
  );
}

const styles = StyleSheet.create({
  campo_select: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    fontSize: 25,
    color: 'gray',
  },
  campo_select_item: {
    fontSize: 15,
    color: 'gray',
  }
});


export interface CampoSelectComErroProps {
  control: any;
  name: any;
  erro: any;
  label_campo_selecione: string;
  data: DataTypes[];
}


export function CampoSelectComErro(props: CampoSelectComErroProps) {
  const { control, label_campo_selecione, data, name, erro } = props;
  return (
    <CampoContainer>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            selectedValue={String(value)}
            // minWidth="200"
            accessibilityLabel={label_campo_selecione}
            placeholder={label_campo_selecione}
            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }}
            mt={1}
            onValueChange={(itemValue) => onChange(itemValue)}
          >
            {data.map((item, index) => {
              const { texto, valor } = item;

              return (
                <Select.Item
                  label={texto}
                  value={valor}
                  key={index}
                />
              );
            })}
          </Select>
        )}
        name={name}
      />
      {erro}
    </CampoContainer>
  );
}

const ExemploSelectComErrorMessage = () => {
  return (
    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose service</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />
        }} mt="1">
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

const ExemploSelect = () => {
  let [service, setService] = React.useState("");
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>
  );
};

export interface CampoSelectProps {
  control: any;
  name: any;
  isInvalid?: boolean;
  mode?: modeTypes
  placeholder: string;
  label_campo_selecione: string;
  defaultValue?: string;
  menssagem_erro?: string;
  data: DataTypes[];
}
export function CampoSelect(props: CampoSelectProps) {
  const { control, label_campo_selecione, placeholder,
    defaultValue, data, name, isInvalid, menssagem_erro } = props;

  return (
    <FormControl
      isRequired
      isInvalid={isInvalid}
      paddingY={2}
      paddingX={4}
    >
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            placeholder={placeholder}
            selectedValue={value}
            onValueChange={(itemValue: string) => { onChange(itemValue); }}
            variant="underlined"
            size="2xl"
          >
            <Select.Item label={label_campo_selecione} value="" />
            {data.map((item, index) => <Select.Item label={item.texto} value={item.valor} key={index} />)}
          </Select>
        )}
        name={name}
        rules={{ required: 'Selecione um item' }}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>
        <MensagemErro menssagem={menssagem_erro} />
      </FormControl.ErrorMessage>
    </FormControl>
  );
}