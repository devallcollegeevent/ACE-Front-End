"use client";

import { useLoading } from "../../../context/LoadingContext";
import "./GlobalLoader.css";

export default function GlobalLoader() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="global-loader-overlay">
      <div className="global-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
