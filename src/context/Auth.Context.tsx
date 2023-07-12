'use client';

import { registerSchemaType } from "@/schema/user.schema";
import { api } from "@/service/api";
import { NextRouter } from "next/router";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as IProviderValue)

interface iAuthProviderChildren {
    children: React.ReactNode;
}

interface IProviderValue {
    token: string;
    loginFunction(infoLogin: iInfoLogin): Promise<void>;
    registerFunction: (registerData: registerSchemaType) => Promise<void>
    protectRoutes: () => void;
    user: IUser;
}

interface iInfoUser {
    token: string;
    id: string;
}

export interface iInfoLogin {
    email: string;
    password: string;
}

interface IUser {
    name: string
    email: string
    password: string
    phone: string
    birthdate: string
    admin: boolean
}

export const AuthProvider = ({ children }: iAuthProviderChildren & { router: NextRouter }) => {
    const router = useRouter();

    const cookies = parseCookies();
    const userId = cookies["@id"];
    const token = cookies["@token"];

    const [user, setUser] = useState<IUser>({} as IUser);

    const loginFunction = async (infoLogin: iInfoLogin) => {
        try {
            await api.post<iInfoUser>("/login", infoLogin).then((res) => {
                setCookie(null, "@token", res.data.token, {
                    maxAge: 60 * 5000,
                    patch: "/",
                });
                setCookie(null, "@id", res.data.id, {
                    maxAge: 60 * 5000,
                    patch: "/",
                });

                const token = res.data.token;
                api.defaults.headers.common.Authorization = `Bearer ${token} `;
            });

            toast.success("Login realizado com Sucesso!");
            setTimeout(() => {
                // router.push("/");
                console.log('loguei')
            }, 2000);
        } catch (error) {
            toast.error("E-mail ou senha incorreto!");
        }
    };

    const registerFunction = async (registerData: registerSchemaType) => {
        try {
            await api.post('/users', registerData)

            toast.success('Usuário cadastrado com sucesso')
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (error) {
            toast.error("Algo deu errado cadastro!");
        }
    }

    const protectRoutes = () => {
        if (!token) {
            router.push("/");
        }
    };

    useEffect(() => {
        const findUser = async (id: string) => {
            try {
                const response = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            findUser(userId);
        }
    }, [userId]);


    return (
        <AuthContext.Provider value={{
            token,
            loginFunction,
            registerFunction,
            protectRoutes,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}