import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-300">🚀 Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300">Solana Fun</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Interactive Solana dApp with TipJar, Leaderboard, and wallet integration.
            </p>
            <a href="https://solanafun.netlify.app/" target="_blank" rel="noreferrer"
              className="text-teal-400 mt-3 inline-block hover:underline">
              View →
            </a>
          </div>
          
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300">Aesthetic Bakester</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Imteractive Cake shop webpage
            </p>
            <a href="https://aesthetic-bakesters.netlify.app/cupcakes" target="_blank" rel="noreferrer"
              className="text-teal-400 mt-3 inline-block hover:underline">
              View →
            </a>
          </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300">Wingrow Agritech</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Farmers interactive dashboard demo for wingrow agritech
            </p>
            <a href="https://suspicious-williams-b18ad3.netlify.app/" target="_blank" rel="noreferrer"
              className="text-teal-400 mt-3 inline-block hover:underline">
              View →
            </a>
          </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300">Weather App</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Interactive weather app built using react.
            </p>
            <a href="https://heuristic-dubinsky-747f00.netlify.app/" target="_blank" rel="noreferrer"
              className="text-teal-400 mt-3 inline-block hover:underline">
              View →
            </a>
          </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-purple-300">Contact Book</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Contact book webapp built using React-Redux.
            </p>
            <a href="https://mystifying-goldstine-14776c.netlify.app/" target="_blank" rel="noreferrer"
              className="text-teal-400 mt-3 inline-block hover:underline">
              View →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
