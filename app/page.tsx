export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="max-w-4xl w-full">

        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl">

          <div className="flex gap-2 p-3 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="p-8 font-mono">
            <p className="text-green-400">$ whoami</p>

            <h1 className="text-5xl font-bold mt-4">
              Rishabh Malhotra
            </h1>

            <p className="mt-4 text-slate-300">
              Ruby on Rails Engineer
            </p>

            <p className="mt-6 text-slate-400">
              Building scalable backend systems with
              Rails, MongoDB and Sidekiq.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}