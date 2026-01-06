import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import { useStore } from "./store/useAppStore"

const App = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <>
      <div>
        {
          isLoggedIn ? <DashboardPage/> : <LoginPage/>
        }
      </div>
    </>
  )
}

export default App