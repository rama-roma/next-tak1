import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Agent {
  id: string;
  agents: string;
  level: string;
}

interface AuthState {
  agent: Agent | null;
  isLoggedIn: boolean;
  login: (agent: Agent) => void;
  logout: () => void;
}

interface MissionState {
  balance: number;
  steal: (amount: number) => void;
  resetBalance: () => void;
}

interface UIState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  notifications: string[];
  addNotification: (msg: string) => void;
}

export const useStore = create(
  persist<AuthState & MissionState & UIState>(
    (set) => ({
      agent: null,
      isLoggedIn: false,
      login: (agent) => set({ agent, isLoggedIn: true }),
      logout: () => set({ agent: null, isLoggedIn: false }),

      balance: 0,
      steal: (amount) => set((state) => ({ balance: state.balance + amount })),
      resetBalance: () => set({ balance: 0 }),

      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      notifications: [],
      addNotification: (msg) =>
        set((state) => ({
          notifications: [msg, ...state.notifications].slice(0, 3),
        })),
    }),
    {
      name: "agent-storage",
      partialize: (state) =>
        ({
          agent: state.agent,
          balance: state.balance,
          isLoggedIn: state.isLoggedIn,
        } as unknown as AuthState & MissionState & UIState),
    }
  )
);
