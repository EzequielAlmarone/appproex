import React from 'react';

import { SliderBox } from "react-native-image-slider-box";
import { ImageView } from './styles';

export default function ListFotos({ images, onChange }) {
     
    return (
        
        <ImageView>
            <SliderBox images={images}
                resizeMode={'contain'}
                resizeMethod={'resize'} 
                dotColor = "#c1c1c1" //cor do ponto de paginação
                inactiveDotColor = "#4d4c4a" // cor dos pontos de paginações inativos
                imageLoadingColor = "#04BF9D" // cor do loading da imagem
                ImageComponentStyle = {{borderRadius: 15}} // borda imagem
             />
        </ImageView> 

    );
}