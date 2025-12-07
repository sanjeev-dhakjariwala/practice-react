import React, { createContext, useContext, useReducer, type ReactNode } from "react";

type FavoriteState = {
  ids: number[];
};

type Action = { type: "TOGGLE"; id: number } | { type: "CLEAR" };

const FavoriteContext = createContext<{
  state: FavoriteState;
  toggle: (id: number) => void;
  clear: () => void;
} | undefined>(undefined);

function reducer(state: FavoriteState, action: Action): FavoriteState {
  switch (action.type) {
    case "TOGGLE": {
      const exists = state.ids.includes(action.id);
      return { ids: exists ? state.ids.filter((i) => i !== action.id) : [...state.ids, action.id] };
    }
    case "CLEAR":
      return { ids: [] };
    default:
      return state;
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { ids: [] });

  const toggle = (id: number) => dispatch({ type: "TOGGLE", id });
  const clear = () => dispatch({ type: "CLEAR" });

  return <FavoriteContext.Provider value={{ state, toggle, clear }}>{children}</FavoriteContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
