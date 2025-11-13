import React, { createContext, useContext, useRef, useState } from "react";
import Stack from "../utils/pila";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const stackRef = useRef(new Stack());
  const [favorites, setFavorites] = useState(stackRef.current.toArray());
  const [open, setOpen] = useState(false);

  const addFavorite = (item) => {
    stackRef.current.push(item);
    setFavorites(stackRef.current.toArray());
    setOpen(true);
  };

  const removeFavorite = (id) => {
    stackRef.current.remove(id);
    setFavorites(stackRef.current.toArray());
  };

  const popFavorite = () => {
    const popped = stackRef.current.pop();
    setFavorites(stackRef.current.toArray());
    return popped;
  };

  const isFavorite = (id) => {
    return stackRef.current.toArray().some((p) => p.id === id);
  };

  const clearFavorites = () => {
    stackRef.current.clear();
    setFavorites([]);
  };

  const toggleFavorites = () => setOpen((v) => !v);
  const openFavorites = () => setOpen(true);
  const closeFavorites = () => setOpen(false);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        popFavorite,
        isFavorite,
        clearFavorites,
        open,
        toggleFavorites,
        openFavorites,
        closeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
export default FavoritesProvider;
