import ValoresVariacao from "./ValoresVariacao";
import { Text, FlatList } from "react-native";
import HorizontalScroll from "../HorizontalScroll";

import { variacoesProdutoTeste } from "../../TesteAPI/variacoesProduto" //Teste

export default function Variations({variacoesProduto=variacoesProdutoTeste}){

    return(
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        data={variacoesProduto}
        keyExtractor={variacao =>variacao._id}
        renderItem={({item : variacao}) => (

          <HorizontalScroll scrollTitle={variacao.nome} scrollTitleBottomSpace={5}>
            <ValoresVariacao valores={variacao.valores}/>
          </HorizontalScroll>
          )}
        />
      )
}
