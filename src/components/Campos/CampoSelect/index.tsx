import { Picker } from "@react-native-picker/picker";
import React from "react"
import { Controller } from "react-hook-form"
import { StyleSheet } from "react-native"
import { CampoContainer } from "../../Container";

interface CampoSelectProps {
  control: any;
  name: any;
  erro: any;
  placeholder?: string;
  mode?: "dialog" | "dropdown"
  label_campo_selecione: string;
  data: {
    valor: string;
    texto: string;
  }[];
}

export function CampoSelect(props: CampoSelectProps) {
  return (
    <CampoContainer>
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => { onChange(itemValue) }}
            onBlur={onBlur}
            placeholder={props.placeholder}
            style={styles.campo_select}
            itemStyle={styles.campo_select_item}
          >
            <Picker.Item label={props.label_campo_selecione} value="" />
            {props.data.map((item, index) => {
              return (
                <Picker.Item
                  style={styles.campo_select_item}
                  label={item.texto}
                  value={item.valor}
                  key={index}
                />
              );
            })}
          </Picker>
        )}
        name={props.name}
      />
      {props.erro}
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

/*
  export function CampoSelect2() {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }

  export function CampoSelect3() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }

    function close() {
      pickerRef.current.blur();
    }

    return <Picker
      ref={pickerRef}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  }
*/