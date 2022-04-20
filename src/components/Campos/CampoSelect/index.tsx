import { Picker } from "@react-native-picker/picker";
import React from "react"
import { Controller } from "react-hook-form"
import { StyleSheet } from "react-native"
import { CampoContainer } from "../../Container/CampoContainer";

interface DataTypes {
  valor: string;
  texto: string;
}

type modeTypes = "dialog" | "dropdown";

interface CampoSelectProps {
  control: any;
  name: any;
  erro: any;
  placeholder?: string;
  mode?: modeTypes
  label_campo_selecione: string;
  data: DataTypes[];
}

export function CampoSelect(props: CampoSelectProps) {
  const { control, placeholder, label_campo_selecione,
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
            placeholder={placeholder}
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
