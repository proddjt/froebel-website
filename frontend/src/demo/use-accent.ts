"use client";

import { useSyncExternalStore } from "react";
import { type AccentId, defaultAccent, isAccentId } from "./accents";

// Tiny localStorage-backed store so the chosen accent survives reloads.

const listeners = new Set<() => void>();

function read(key: string): AccentId {
  try {
    const value = window.localStorage.getItem(key);
    return isAccentId(value) ? value : defaultAccent;
  } catch {
    return defaultAccent;
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function useAccent(storageKey: string) {
  const accent = useSyncExternalStore(
    subscribe,
    () => read(storageKey),
    () => defaultAccent,
  );

  const setAccent = (next: AccentId) => {
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // storage unavailable: the choice just won't persist
    }
    listeners.forEach((l) => l());
  };

  return [accent, setAccent] as const;
}
