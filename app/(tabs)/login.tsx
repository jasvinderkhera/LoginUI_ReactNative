import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Button from "@/components/button";

const Login = () => {
  const [value, setValue] = useState();
  const router = useRouter();

  const onLogin = () => {
    console.log(value)
    router.navigate("/signup");
  };
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Image source={require("@/assets/images/login.jpg")} resizeMode="cover" style={{width:"100%", marginBottom:20}}/>
      <TextInput
        placeholder="Enter your email"
        style={{
          height: 40,
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
        onChangeText={(e) => setValue(e)}
      />
      <TextInput
        placeholder="Enter your Password"
        style={{
          height: 40,
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
      />
      <Button title={"Login"} onPress={onLogin} />
    </View>
  );
};

export default Login;
