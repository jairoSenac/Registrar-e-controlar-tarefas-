import DatePicker from "react-native-date-picker";
import { DatePickerAndroidOpenReturn } from "react-native";

import React,{Component} from 'react';
import {
       View
} from 'react-native';

import CadastrarTarefas from './src/Componentes/CadastrarTarefas';


class App extends Component{
  render(){
    return(
      <View>
        <CadastrarTarefas
          
          />
      </View>

    )
  }
}

export default App