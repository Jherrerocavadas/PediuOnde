import { FlatList } from "react-native"
import { products } from "../../TesteAPI/products"
import { ProductContainer } from "../ProductContainer";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Products(){
    const navigation = useNavigation()
    return(
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            data={products}
            keyExtractor={product => product._id}
            renderItem={({item : product}) => (
              <TouchableOpacity onPress={()=>{ navigation.navigate('PagProduto') }}>
                <ProductContainer
                  imageUrl={product.imagePath}
                  Title={product.nome}
                  Description={product.descricao}
                  Encomenda={product.aceitaEncomenda}
                 />
               </TouchableOpacity>
             )}
            />
        )
}
