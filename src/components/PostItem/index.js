import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ItemList, Titulo, Autor} from './styles';
export default function PostItem({titulo, autor, educacao, route}){

  const navigation = useNavigation();

  return(
    <ItemList onPress={()=> {navigation.navigate(route,{ item: educacao})}}>
        <Titulo numberOfLines={1}>{titulo}</Titulo>
        <Autor numberOfLines={1}>{autor}</Autor>
    </ItemList>
  )
}
