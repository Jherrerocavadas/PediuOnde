import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

{/*---------- <Telas> ----------*/}
import Inicial from "./src/Telas/Inicial";
import Login from "./src/Telas/Login";
import Cadastro from "./src/Telas/Cadastro";
import Chat from "./src/Telas/Chat";
import PagPagamento from "./src/Telas/PagPagamento";
import PagProduto from "./src/Telas/PagProduto";
import ResumoPedido from "./src/Telas/ResumoPedido";
import AddProduto from "./src/Telas/Vendedores/AddProduto";
import Analytics from "./src/Telas/Vendedores/Analytics";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component ={Inicial}/>
      <Tab.Screen name="Login" component ={Login}/>
      <Tab.Screen name="Cadastro" component ={Cadastro}/>
      <Tab.Screen name="Chat" component ={Chat}/>
      <Tab.Screen name="Produtos" component ={PagProduto}/>
      <Tab.Screen name="Pagamento" component ={PagPagamento}/>
      <Tab.Screen name="ResumoPedido" component ={ResumoPedido}/>
      <Tab.Screen name="AnalyticsVendor" component ={Analytics}/>
      <Tab.Screen name="AdicionarProduto" component ={AddProduto}/>
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}