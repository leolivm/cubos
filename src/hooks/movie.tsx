import React, { createContext, useCallback, useContext, useState } from "react";

interface AuthState {
  id: any;
}

interface AuthContextData {
  id: any;
  signIn(id: any): void;
  deleteItem(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const id = localStorage.getItem("@Cubos:id");

    if (id) {
      return { id: JSON.parse(id) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback((id) => {
    localStorage.setItem("@Cubos:id", id);

    setData({ id });
  }, []);

  const deleteItem = useCallback(() => {
    localStorage.removeItem("@Cubos:id");
  }, []);

  return (
    <AuthContext.Provider value={{ id: data.id, signIn, deleteItem }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
