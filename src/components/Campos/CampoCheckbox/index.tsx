import { FormControl, Checkbox, Text } from 'native-base';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';

export interface CampoCheckboxProps {
  // control: any;
  control: Control<any, any>;
  name: any;
  checkbox_label: string;
  defaultValue?: string;
  data: {
    valor: string;
    texto: string;
  }[];
}

export function CampoCheckbox(props: CampoCheckboxProps) {
  const { control, checkbox_label, defaultValue, name, data } = props;

  return (
    <FormControl>
      <FormControl.Label>{checkbox_label}</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange } }) => (
          <Checkbox.Group
            onChange={(values) => { onChange(values); }}
            flexDirection="row"
          >
            {data.map((item, index) => {
              const { texto, valor } = item;
              return (
                <Checkbox value={valor} colorScheme="blue" key={index}>
                  <Text mx={2}>{texto}</Text>
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
}