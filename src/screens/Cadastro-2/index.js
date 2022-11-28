import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, LoginButton, LoginText, Logo, MensageText } from "./styles";
export default function ConfirmacaoCadastro() {
  
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

 
   return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <MensageText>Usuário cadastrado com sucesso!</MensageText>
      
    
      <LoginButton onPress={screenLogin}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>

                   
      <StatusBar style="auto" />
    </Container>
  );
}




