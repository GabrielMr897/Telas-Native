import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Title,Logo, InputName, InputCPF, InputPassword, InputDate, InputConfirmPassword, LoginButton, LoginText } from "./styles";

export default function Cadastro() {
  
  const [user, setUser] = useState({
    name: '',
    cpf: '',
    date:'',
    password:'',
    ConfirmPassword:'',
  });
  const navigation = useNavigation();
  
  function screenConfirmacaoCadastro() {
    navigation.navigate("ConfirmacaoCadastro");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Cadastro</Title>
      
      <InputName
        value={user.name}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputCPF
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'CPF'}
        placeholderTextColor={'gray'}
      />
      <InputDate
        value={user.date}
        onChangeText={setUser}
        placeholder={'Data de nascimento'}
        placeholderTextColor={'gray'}
      />

        <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Senha'}
        placeholderTextColor={'gray'}
      />

        <InputConfirmPassword
        value={user.ConfirmPassword}
        onChangeText={setUser}
        placeholder={'Confirmar Senha'}
        placeholderTextColor={'gray'}
      />
                   
      <LoginButton onPress={screenConfirmacaoCadastro}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
      
      <StatusBar style="auto" />
    </Container>
  );
}




