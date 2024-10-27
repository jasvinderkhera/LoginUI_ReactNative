import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 10,
          alignItems:"center"
        }}
        onPress={onPress}
      >
        <Text style={{ color: "white" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
