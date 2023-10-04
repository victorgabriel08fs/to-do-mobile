import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../services/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('@To-do:user');
            if (value !== null) {
                setUser(JSON.parse(value));
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    async function Login(userData, remember) {
        const response = await api.post('auth/login', userData).then((res) => {
            setUser(res.data.user);
            setLoading(false);
        });


        try {
            await AsyncStorage.setItem(
                '@To-do:user',
                JSON.stringify(response.data.user),
            );
        } catch (error) {
            // Error saving data
        }
    }

    async function Register(userData) {
        const response = await api.post('auth/register', userData);

        await Login({ email: userData.email, password: userData.password }, true);
    }

    async function Logout() {
        setUser(null);
        try {
            await AsyncStorage.setItem(
                '@To-do:user', "",
            );
        } catch (error) {
            // Error saving data
        }
    }

    return (
        <AuthContext.Provider
            value={{ signed: Boolean(user), user, Login, loading, Logout, Register }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}