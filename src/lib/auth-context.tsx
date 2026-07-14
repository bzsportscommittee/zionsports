import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  User,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Handle redirect result
  useEffect(() => {
    const initAuth = async () => {
      try {
        await getRedirectResult(firebaseAuth);
      } catch (error) {
        console.error("Redirect Result Error:", error);
      }
    };

    initAuth();

    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("Auth State:", user);

      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      await setPersistence(firebaseAuth, browserLocalPersistence);

      await signInWithRedirect(firebaseAuth, googleProvider);
    } catch (error) {
      console.error("Sign In Error:", error);
      throw error;
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
