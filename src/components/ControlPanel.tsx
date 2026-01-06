import { useState } from "react";
import { useStore } from "../store/useAppStore";
import ActionButton from "./ActionButton";

const ControlPanel = () => {
  const [customAmount, setCustomAmount] = useState<number>(0);
  const theme = useStore((state) => state.theme);

  return (
    <main
      className={`w-140  m-auto p-6 flex flex-col gap-6 rounded-3xl shadow-xl transition-colors ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex justify-center">
        <ActionButton action="steal" amount={100}>
          Украсть 100$
        </ActionButton>
      </div>

 
      <div className="flex gap-3 items-center justify-center">
        <input
          type="number"
          placeholder="Сумма"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          className={`px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 transition w-auto ${
            theme === "light"
              ? "border-gray-300 focus:ring-blue-400"
              : "border-gray-600 focus:ring-indigo-500 bg-gray-700 text-white placeholder-gray-400"
          }`}
        />
        <ActionButton action="steal" amount={customAmount}>
          Украсть сумму
        </ActionButton>
      </div>

      <div className="flex flex-col gap-3">
        <ActionButton action="reset">Сбросить миссию</ActionButton>
        <ActionButton action="toggleTheme">Переключить тему</ActionButton>
        <ActionButton action="logout">Выйти</ActionButton>
      </div>
    </main>
  );
};

export default ControlPanel;
