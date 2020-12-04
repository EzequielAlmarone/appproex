import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { PickerView } from './styles';

export default function Picker({ onChange, tipo, bairros }) {

    let bairroItem = bairros.map((v, k) =>
        <RNPickerSelect.Item key={k} value={k} label={v.nome} />
    );

    return (
        <PickerView>
            <Icon name="map" size={20} color="#999999" />
            <RNPickerSelect
                style={{
                    width: '100%',
                    color: '#999999',
                    marginLeft: 5,
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
