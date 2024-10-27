import { View, Text, Image } from "react-native";
import React from "react";
import Button from "@/components/button";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter()

  const onContinue =()=>{
    router.navigate("/login")
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Image source={require("@/assets/images/react-logo.png")} resizeMode="cover" style={{width:"100%",height:300, marginBottom:20}} />
      <Text style={{fontSize:25, marginBottom:20}}>Welcome to React Native</Text>
      <Button title={"Continue"} onPress={onContinue}/>
    </View>
  );
};

export default Index;
