import React, { useState, createContext } from 'react';

import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);

    // Função de Login 

    // Função de Registrar novo Usuário

    // Função de Logout
}

export default AuthProvider;