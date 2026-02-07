import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { StateConfig, stateConfigs, DEFAULT_STATE, getActiveStates } from "@/config/states";

interface StateContextType {
  currentState: StateConfig;
  setCurrentState: (stateId: string) => void;
  activeStates: StateConfig[];
  allStates: StateConfig[];
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

export function StateProvider({ children }: StateProviderProps) {
  const [currentStateId, setCurrentStateId] = useState<string>(() => {
    // Check localStorage for saved state preference
    const saved = localStorage.getItem("aliko-state");
    if (saved && stateConfigs[saved]?.isActive) {
      return saved;
    }
    return DEFAULT_STATE;
  });

  const currentState = stateConfigs[currentStateId] || stateConfigs[DEFAULT_STATE];
  const activeStates = getActiveStates();
  const allStates = Object.values(stateConfigs);

  const setCurrentState = (stateId: string) => {
    if (stateConfigs[stateId]?.isActive) {
      setCurrentStateId(stateId);
      localStorage.setItem("aliko-state", stateId);
    }
  };

  useEffect(() => {
    // If current state becomes inactive, revert to default
    if (!stateConfigs[currentStateId]?.isActive) {
      setCurrentStateId(DEFAULT_STATE);
      localStorage.setItem("aliko-state", DEFAULT_STATE);
    }
  }, [currentStateId]);

  return (
    <StateContext.Provider
      value={{
        currentState,
        setCurrentState,
        activeStates,
        allStates,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useStateConfig() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateConfig must be used within a StateProvider");
  }
  return context;
}
