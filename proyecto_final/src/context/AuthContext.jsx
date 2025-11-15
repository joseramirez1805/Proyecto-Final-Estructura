import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext(null);

function mapFirebaseError(err) {
  const code = err?.code || "";
  if (code.includes("auth/email-already-in-use")) return "El correo ya está en uso.";
  if (code.includes("auth/invalid-email")) return "El correo no es válido.";
  if (code.includes("auth/weak-password")) return "La contraseña es demasiado débil (mínimo 6 caracteres).";
  if (code.includes("auth/user-not-found")) return "No existe una cuenta con ese correo.";
  if (code.includes("auth/wrong-password")) return "Contraseña incorrecta.";
  if (code.includes("auth/network-request-failed")) return "Error de red. Revisa tu conexión.";
  // fallback to firebase message
  return err?.message || "Error de autenticación";
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // quick restore from localStorage
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {}

    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        const simple = { uid: u.uid, email: u.email, displayName: u.displayName };
        setUser(simple);
        try { localStorage.setItem("user", JSON.stringify(simple)); } catch (e) {}
      } else {
        setUser(null);
        try { localStorage.removeItem("user"); } catch (e) {}
      }
    });

    return () => unsub();
  }, []);

  const register = async (name, email, password) => {
    setError("");
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (cred.user && name) {
        await updateProfile(cred.user, { displayName: name });
      }
      setLoading(false);
      return { ok: true };
    } catch (e) {
      const msg = mapFirebaseError(e);
      setError(msg);
      setLoading(false);
      return { ok: false, error: msg };
    }
  };

  const login = async (email, password) => {
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return { ok: true };
    } catch (e) {
      const msg = mapFirebaseError(e);
      setError(msg);
      setLoading(false);
      return { ok: false, error: msg };
    }
  };

  const signInWithGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false);
      return { ok: true };
    } catch (e) {
      const msg = mapFirebaseError(e);
      setError(msg);
      setLoading(false);
      return { ok: false, error: msg };
    }
  };

  const logout = async () => {
    try {
      await fbSignOut(auth);
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
