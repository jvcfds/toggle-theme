import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ${
        theme === "light"
          ? "bg-gray-100 text-black"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "nature"
          ? "bg-gradient-to-r from-green-400 via-green-600 to-emerald-700 text-white"
          : "bg-black text-pink-400"
      }`}
    >
      {/* Atalhos de temas */}
      <div className="absolute top-4 right-4 flex gap-3 text-2xl">
        <button onClick={() => setTheme("light")} className="hover:scale-125 transition">☀️</button>
        <button onClick={() => setTheme("dark")} className="hover:scale-125 transition">🌙</button>
        <button onClick={() => setTheme("nature")} className="hover:scale-125 transition">🌲</button>
        <button onClick={() => setTheme("retro")} className="hover:scale-125 transition">👾</button>
      </div>

      {/* Título */}
      <h1
        className={`text-5xl font-extrabold mb-8 ${
          theme === "nature"
            ? "drop-shadow-lg text-yellow-200"
            : theme === "retro"
            ? "animate-pulse text-green-400 drop-shadow-lg"
            : ""
        }`}
      >
        {theme === "light" && "☀️ Light Theme"}
        {theme === "dark" && "🌙 Dark Theme"}
        {theme === "nature" && "🌲 Nature Theme"}
        {theme === "retro" && "👾 Retro Arcade"}
      </h1>

      {/* Botão central */}
      <button
        onClick={toggleTheme}
        className={`px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:scale-110 transition
          ${
            theme === "nature"
              ? "bg-yellow-300 text-green-900 hover:bg-green-200"
              : theme === "retro"
              ? "bg-pink-500 text-black hover:bg-green-400"
              : "bg-white/20 text-white backdrop-blur-md"
          }`}
      >
        {theme === "light" && "☀️ Light"}
        {theme === "dark" && "🌙 Dark"}
        {theme === "nature" && "🌲 Nature"}
        {theme === "retro" && "👾 Retro"}
      </button>
    </div>
  );
}
