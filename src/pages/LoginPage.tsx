import { useForm } from "react-hook-form";
import { useStore } from "../store/useAppStore";
import { loginAgent } from "../services/auth";

interface FormData {
  name: string;
}
const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const login = useStore((state) => state.login);

  const onSubmit = async (data: FormData) => {
    try {
      const agent = await loginAgent(data.name, "Junior Agent");
      login(agent);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="max-w-[1300px] m-auto p-4 h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl w-100 flex flex-col gap-6 transition-colors"
        >
          <h1 className="text-3xl font-extrabold text-center mb-4 text-gray-900">
            Добро пожаловать, агент
          </h1>

          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Введите имя агента"
            className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-gray-900"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 shadow-md transition"
          >
            Войти
          </button>

          <p className="text-sm text-center text-gray-500">
            Введите своё агентское имя, чтобы продолжить
          </p>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
