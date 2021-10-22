import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface AuthProviderProps {
    children: ReactNode
}

interface User {
    id: string
    name: string
    avatar_url: string
    login: string
}

interface AuthContextData {
    user: User | null
    signInUrl: string
}

interface AuthResponse {
    token: string,
    user: {
        id: string
        name: string
        avatar_url: string
        login: string
    }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=829556cfc3d3890fa2d9`

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode,
        })

        const { token, user } = response.data

        localStorage.setItem('@dowhile:token', token)

        setUser(user)
    }

    useEffect(() => {
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')

        if(hasGithubCode) {
            const [ urlWithoutCode, githubCode ] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode)
            signIn(githubCode)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {children}
        </AuthContext.Provider>
    )
} 