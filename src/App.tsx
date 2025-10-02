import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        {dark ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
      </h1>

      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-black"
      >
        Alternar Tema
      </button>
    </div>
  );
}
