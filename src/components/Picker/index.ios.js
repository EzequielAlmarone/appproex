import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { PickerView } from './styles';

export default function Picker({ onChange, tipo, bairroItem }) {

    return (
        <PickerView>
            <Icon name="map" size={20} color="rgba(255,255,255,0.6)" />
            <RNPickerSelect
                style={{
                    width: '100%',
                    color: '#fff',
                    marginLeft: 10,


                }}
                prompt="Selecione seu bairro"
                selectedValue={tipo}
                onValueChange={(valorSelecionado) => onChange(valorSelecionado)}
            >
                {bairroItem}
            </RNPickerSelect>
        </PickerView>
    )

} 