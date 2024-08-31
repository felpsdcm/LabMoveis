import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import Style from "./Styles/Default";
import axios from "axios"


const produtos = [
  {id: 1, nome: "Coca", preco: 5.5 },
  {id: 2, nome: "Pepsi", preco: 5.5 },
  {id: 3, nome: "Xereta", preco: 5.5 },
  {id: 4, nome: "Dolly", preco: 5.5 },
];

var contador=0;

export default function Index() {

 let [contador, setContador] = useState(0);
 let [produtos,setProdutos]= useState([]);

 useEffect(()=>{

 },[])

 function carregaProduto(){
  axios.get('https://app-api-tapwm.onrender.com/api/produtos')
  .then((resp)=>{

  })
 }


  return (
    <View
      style={Style.container}
    >
     
<ListaProdutos produtos={produtos}></ListaProdutos>

<Button title={contador.toString()}
onPress={()=>{clicarBotao()}}
></Button>
    </View>
  );

  function clicarBotao(){
  setContador(contador+1);
  }

}

const estilo= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight:"bold"
  },
  titulo: {
    color: "#00000",
    fontSize: 30,
    textAlign: "left",
    fontWeight:"bold"

  },
});