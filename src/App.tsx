import { useTheme } from "./context/ThemeContext";
import { useState } from "react";

export default function App() {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);

  const triggerEffect = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const colors = ["#f59e0b", "#84cc16", "#22d3ee", "#f472b6", "#e11d48"];

    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x: clientX,
      y: clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // remover depois de 1s
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ${
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
        onClick={(e) => {
          toggleTheme();
          triggerEffect(e); // fogos só no clique do botão
        }}
        className={`px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:scale-110 transition border-2
          ${
            theme === "nature"
              ? "border-orange-400 text-orange-200 hover:bg-orange-500 hover:text-white"
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

      {/* Partículas/Fogos */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: p.color,
            left: p.x,
            top: p.y,
            transform: `translate(-50%, -50%)`,
            animation: "explode 1s ease-out forwards",
          }}
        />
      ))}

      {/* Animação CSS */}
      <style>{`
        @keyframes explode {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { 
            transform: translate(calc(-50% + ${Math.random() * 200 - 100}px), 
                                 calc(-50% + ${Math.random() * 200 - 100}px)) scale(0.5); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
}
