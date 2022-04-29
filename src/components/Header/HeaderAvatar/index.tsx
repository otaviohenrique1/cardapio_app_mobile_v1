import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderAvatarProps {
  // 
}

export function HeaderAvatar(props: HeaderAvatarProps) {
  const { } = props;
  const { botaoAvatarHeader } = styles;

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Avatar');
          alert('Avatar');
        }}
        style={botaoAvatarHeader}
      >
        <FontAwesome5 name="user-circle" size={40} color="white" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  botaoAvatarHeader: {
    paddingStart: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
