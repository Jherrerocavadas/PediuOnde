import Category from "./Category";
import { FlatList } from "react-native"
import { categories } from "../../TesteAPI/categories"

export default function Categories(){
    return(
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            data={categories}
            keyExtractor={category => category._id}
            renderItem={({item : category}) => (
              <Category
                 urlCategory={category.imagePath}
                 texto={category.nome}
               />
             )}
            />
        )
}
