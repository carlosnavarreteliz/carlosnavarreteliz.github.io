// Hook para manejar el idioma de forma persistente (lazy init, sin setState en efectos)
import {useState} from "react";

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("preferredLanguage") || "en";
  });

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== "undefined")
      localStorage.setItem("preferredLanguage", newLanguage);
  };

  return [language, updateLanguage];
}
