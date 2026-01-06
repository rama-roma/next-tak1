import React from "react";
import { useStore } from "../store/useAppStore";

interface ActionButtonProps {
  action: "steal" | "reset" | "toggleTheme" | "logout";
  amount?: number;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  action,
  amount = 0,
  children,
}) => {
  const steal = useStore((state) => state.steal);
  const resetBalance = useStore((state) => state.resetBalance);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const logout = useStore((state) => state.logout);
  const addNotification = useStore((state) => state.addNotification);
  const theme = useStore((state) => state.theme);

  const handleClick = () => {
    switch (action) {
      case "steal":
        steal(amount);
        addNotification(`Украл $${amount}`);
        break;
      case "reset":
        resetBalance();
        addNotification("Сбросил миссию");
        break;
      case "toggleTheme":
        toggleTheme();
        addNotification("Сменил тему");
        break;
      case "logout":
        logout();
        addNotification("Вышел из аккаунта");
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-all 
        ${
          theme === "light"
            ? "bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600"
            : "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500"
        }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
