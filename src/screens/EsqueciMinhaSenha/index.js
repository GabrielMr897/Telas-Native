
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Title,Logo,InputLogin,LoginButton,LoginText } from "../Login/styles";

export default function EsqueciMinhaSenha() {
  const [user, setUser] = useState({
    login: '',
  
  });

  const navigation = useNavigation();
  
  function screenAlterarSenha() {
    navigation.navigate("AlterarSenha");
  }
  return (
    <Container >
      <Gradient />
      <Logo source={logo}/>
      <Title>Recuperar Senha</Title>

      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu CPF'}
        placeholderTextColor={'gray'}
      />

      <LoginButton onPress={screenAlterarSenha}>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
    </Container>
  );
}


