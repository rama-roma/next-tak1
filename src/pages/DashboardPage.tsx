import ControlPanel from "../components/ControlPanel";
import { useStore } from "../store/useAppStore";

const DashboardPage = () => {
  const agent = useStore((state) => state.agent);
  const balance = useStore((state) => state.balance);
  const theme = useStore((state) => state.theme);
  const notifications = useStore((state) => state.notifications);
  if (!agent) return null;

  return (
    <>
      <main
        className={`p-4 flex flex-col items-center justify-between h-180 ${
          theme === "light"
            ? "bg-[white] text-gray-900"
            : "bg-gray-900 text-white"
        }`}
      >
        <div
          className={`backdrop-blur-md p-8 rounded-3xl shadow-xl w-290 flex flex-col gap-4 transition-colors ${
            theme === "light"
              ? "bg-[white] text-gray-900"
              : "bg-gray-600 text-white"
          }`}
        >
          <h1 className="text-2xl font-extrabold">
            Привет, {agent.agents} ({agent.level})
          </h1>
          <p className="text-lg">
            Ваш баланс: <span className="font-semibold">{balance}$</span>
          </p>
          <p className="text-sm">Текущая тема: {theme}</p>
        </div>

        <ControlPanel />

        <div
          className={`backdrop-blur-md p-8 rounded-3xl shadow-xl w-290 flex flex-col gap-4 transition-colors ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-gray-600 text-white"
          }`}
        >
          <h2>Последние уведомления</h2>
          {notifications.length === 0 ? (
            <p
              className={theme === "light" ? "text-gray-500" : "text-gray-300"}
            >
              Пока нет уведомлений
            </p>
          ) : (
            <ul className="list-disc ml-6 space-y-1">
              {notifications
                .slice(-4)
                .reverse()
                .map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
