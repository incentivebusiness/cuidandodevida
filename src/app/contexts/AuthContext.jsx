// // contexts/AuthContext.tsx

// import React, { createContext, useState, ReactNode, useContext } from 'react';
// import { signInRequest } from '../api'; // Ajuste o caminho conforme necessário

// type AuthContextType = {
//   isAuthenticated: boolean;
//   signIn: (email: string, password: string) => Promise<void>;
//   token: string | null;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [token, setToken] = useState<string | null>(null);

//   // Recuperar token do localStorage ao inicializar o AuthProvider
//   React.useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const signIn = async (email: string, password: string) => {
//     try {
//       const response = await signInRequest({ email, password });
//       if (response.token) {
//         setToken(response.token);
//         setIsAuthenticated(true);
//         localStorage.setItem('token', response.token);
//       } else {
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       console.error('Failed to sign in', error);
//       setIsAuthenticated(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, signIn, token }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
