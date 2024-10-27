import { ScrollView, Text , Image, TextInput} from 'react-native'
import React from 'react'
import Button from "@/components/button";

const SignUp = () => {
  return (
    <ScrollView style={{paddingHorizontal:20}}>
      <Image source={require("@/assets/images/register.jpeg")} style={{height:300,width:"100%", marginBottom:20}}/>
      <TextInput placeholder="Enter your name" style={{height:40,borderWidth:1,marginBottom:20, paddingHorizontal:20,borderRadius:5 }} onChangeText={(e)=>console.log(e)}/>
      <TextInput placeholder="Enter your email" style={{height:40,borderWidth:1,marginBottom:20, paddingHorizontal:20,borderRadius:5 }}/>
      <TextInput placeholder="Enter your Password" style={{height:40,borderWidth:1,marginBottom:20, paddingHorizontal:20,borderRadius:5 }}/>
      <TextInput placeholder="Confirm your Password" style={{height:40,borderWidth:1,marginBottom:20, paddingHorizontal:20,borderRadius:5 }}/>
      <Button title={"Register"}/>
    </ScrollView>
  )
}

export default SignUp