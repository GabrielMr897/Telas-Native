import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, MensageText, LoginButton, LoginText } from "./styles";

export default function ConfirmacaoSenhaAlterada() {
  
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }
   return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <MensageText>Senha alterada com sucesso!</MensageText>
      
    
      <LoginButton onPress={screenLogin}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>
      
      <StatusBar style="auto" />
    </Container>
  );
}




