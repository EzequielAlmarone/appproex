import React, { useState, createContext, useEffect } from 'react';
import {ToastAndroid } from 'react-native';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [listBairros, setListBairros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    useEffect(() => {
        // buscar lista de bairros 
        async function buscarBairros() {
            await api.get('bairros')
                .then((response) => {
                    setListBairros(response.data),
                        storageBairro(response.data),
                        console.log(response.data)
                }
                )
                .catch((error) => {
                    alert(error)
                });
        }
        // Função buscar usuário salvos ao AsyncStorage
        async function loadStorageUser(){
            const storageUser = await AsyncStorage.getItem('reciclaNavirai');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        //Função buscar bairros salvos ao AsyncStorage
        async function loadStorage() {
            const storageBairros = await AsyncStorage.getItem('bairros');
            if (storageBairros) {
                setListBairros(JSON.parse(storageBairros));
            }
        }
        buscarBairros();
        loadStorage();
        loadStorageUser();
    }, []);
    //Função toast messagem
        const showToast = (message) => {
          ToastAndroid.show(message, ToastAndroid.SHORT);
        };
    // Função de Login 
    async function signIn(email, password) {
        console.log("login");
        if( email && password ){
            setLoadingAuth(true);
             api.post("usuarios/autenticar", {
                email: email,
                senha: password,
            }).then((response)=>{
                setUser(response.data);
                storageUser(response.data);
                setLoadingAuth(false);  
            }).catch( (error) => {
                alert("Email ou Senha incorreto!");
                setLoadingAuth(false);
            }) 
        }else{
            alert("Preencha os campos corretamente!")
        }
    }
    // Função de Registrar novo Usuário
    async function signUp(nome, email, bairro, password) {     
        console.log("bairro signup: " + bairro);
        if(nome && email && password){
            setLoadingAuth(true);
             api.post("usuarios", {
                nome: nome,
                email: email,
                bairro:listBairros[bairro],
                senha: password
            }).then((response) => {
                setUser(response.data);
                storageUser(response.data);
                setLoadingAuth(false);
            }).catch((error) => {
                alert(error.response.data);
                setLoadingAuth(false);
            }) 
        }else{
            alert("preencha os campos corretamente!");
        }
    }
    // Função de Logout
    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })
    }
    //função atualizar o usuário 
     async function signUpdate(nomeUp,bairroUp){
            setLoadingUpdate(true);
            const { id, email, senha} = user
            api.put(`usuarios/${id}`, {
                id: id,
                nome: nomeUp,
                bairro: listBairros[bairroUp],
                email: email,
                senha: senha,

            }).then((response) => {
                setUser(response.data);
                storageUser(response.data);
                setLoadingUpdate(false);
                showToast("Atualizado com Sucesso!");
                
                
            }).catch((error) => {
                alert(error);
                setLoadingUpdate(false);
            })
     }
    // salvar o usuario logado no asyncStorage
    async function storageUser(data) {
        await AsyncStorage.setItem('reciclaNavirai', JSON.stringify(data));
    }
    // salvar os bairros no asyncStorage
    async function storageBairro(data) {
        await AsyncStorage.setItem('bairros', JSON.stringify(data));
    }
    return (
        <AuthContext.Provider value={{ 
            signed: !!user, 
            loading, 
            loadingAuth, 
            loadingUpdate,
            user, 
            listBairros, 
            signUp, 
            signIn, 
            signOut, 
            signUpdate }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;

