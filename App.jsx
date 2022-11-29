import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

{/*---------- <Telas> ----------*/}
import Inicial from "./src/Telas/Inicial";
import Login from "./src/Telas/Login";
import Cadastro from "./src/Telas/Cadastro";
import Chat from "./src/Telas/Chat";
import PagPagamento from "./src/Telas/PagPagamento";
import PagLoja from "./src/Telas/PagLoja";
import Historico from "./src/Telas/HistoricoCompras";
import ResumoPedido from "./src/Telas/ResumoPedido";
import AddProduto from "./src/Telas/Vendedores/AddProduto";
import Analytics from "./src/Telas/Vendedores/Analytics";
import Home from "./src/Telas/Home";
import Entrega from "./src/Telas/Entrega";
import Produto from "./src/Telas/PagProduto";
import ProdutoEncomenda from "./src/Telas/PagProdutoEncomenda";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name='Inicio' component={Home} />
      <HomeStack.Screen name="Entrega" component ={Entrega}/>
      <HomeStack.Screen name="ResumoPedido" component ={ResumoPedido}/>
      <HomeStack.Screen name="PagProdutoEncomenda" component ={ProdutoEncomenda}/>
      <HomeStack.Screen name="PagProduto" component ={Produto}/>
      <HomeStack.Screen name="Chat" component ={Chat}/>
      <HomeStack.Screen name="Loja" component ={PagLoja}/>
      <HomeStack.Screen name="Pagamento" component ={PagPagamento}/>
    </HomeStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();
function LoginStackScreen(){
  return(
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name="Login" component ={Login}/>
      <HomeStack.Screen name="Cadastro" component ={Cadastro}/>
      <HomeStack.Screen name="AnalyticsVendor" component ={Analytics}/>
    </HomeStack.Navigator>
  )
}

export default function App() {

  const accountStyleLabel= {
    tabBarIcon:({size, color}) =>(
      <AntDesign name="user" size={32} color={color} />
    )
  }

  const homeStyleLabel={
    tabBarIcon:({ size, color }) =>(
      <AntDesign name='home' size={32} color={color} />
    )
    }
  
  const historyStyleLabel={
    tabBarIcon:({ size, color, })=>(
      <MaterialCommunityIcons name="history" size={32} color={color} />
    )
  }

  return (
    <NavigationContainer style={{backgroundColor:'black'}}>    
      <Tab.Navigator screenOptions={
        { 
          tabBarStyle:[{
            backgroundColor:'white',
            height:70,
            paddingBottom:10,

          }],
            tabBarActiveTintColor:'#FF881D',
            headerShown:false,
            tabBarHideOnKeyboard:true,
            tabBarLabelStyle:{
              fontSize:14,
              lineHeight:15,
              marginTop:-10
            }
            
         }}>
        <Tab.Screen options={homeStyleLabel}  name="Inicio" component ={HomeStackScreen} />
        <Tab.Screen options={historyStyleLabel} name='Histórico' component={Historico}/>
        <Tab.Screen options={accountStyleLabel} name="Conta" component ={LoginStackScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}