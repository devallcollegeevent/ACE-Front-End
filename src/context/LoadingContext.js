"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

/**
 * LoadingProvider Component
 * Provides global loading state to the application.
 */
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

/**
 * Custom hook to access the loading context.
 */
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used inside LoadingProvider");
  }
  return context;
};
