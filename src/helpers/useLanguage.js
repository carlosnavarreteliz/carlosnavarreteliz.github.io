import {useCallback, useEffect, useSyncExternalStore} from "react";

const KEY = "preferredLanguage";
const listeners = new Set();

// Fallback for browsers that refuse localStorage (Safari private mode, blocked
// site data): the toggle still works for the session, it just will not persist.
let memory = null;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", emit);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", emit);
  };
}

function getSnapshot() {
  if (memory) return memory;

  try {
    const stored = window.localStorage.getItem(KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // Fall through to the browser's own language preference.
  }

  const preferred = navigator.language || "";
  return preferred.toLowerCase().startsWith("es") ? "es" : "en";
}

// The server has no visitor, so it always renders English. React reconciles the
// difference on hydration; reading localStorage during render would instead
// make the markup mismatch and throw the whole tree away.
function getServerSnapshot() {
  return "en";
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next) => {
    if (next !== "en" && next !== "es") return;
    memory = next;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // Kept in memory only.
    }
    emit();
  }, []);

  return [language, setLanguage];
}
