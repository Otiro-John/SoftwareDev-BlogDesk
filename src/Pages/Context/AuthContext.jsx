import { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "./firebase"; // Import Firebase functions
import { onAuthStateChanged } from "firebase/auth";

// Create AuthContext
const AuthContext = createContext();

// Create Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
