export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-[#f3f1ec]">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-[#e7a977] text-sm">
            Personal Knowledge Garden
          </p>

          <h1 className="text-7xl font-bold mt-4">
            Mind Gardein
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl text-xl">
            Grow knowledge. Cultivate expression.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="rounded-3xl bg-[#181c22] p-6">
            <p className="text-zinc-500">Words</p>
            <h2 className="text-4xl mt-2">0</h2>
          </div>

          <div className="rounded-3xl bg-[#181c22] p-6">
            <p className="text-zinc-500">Topics</p>
            <h2 className="text-4xl mt-2">0</h2>
          </div>

          <div className="rounded-3xl bg-[#181c22] p-6">
            <p className="text-zinc-500">Streak</p>
            <h2 className="text-4xl mt-2">0</h2>
          </div>

          <div className="rounded-3xl bg-[#181c22] p-6">
            <p className="text-zinc-500">Recall</p>
            <h2 className="text-4xl mt-2">0%</h2>
          </div>

        </div>

        <div className="rounded-[40px] bg-[#181c22] p-10">

          <h2 className="text-5xl font-bold mb-6">
            Welcome to your garden.
          </h2>

          <p className="text-zinc-400 max-w-2xl text-lg">
            Store words, deepen understanding,
            strengthen memory and improve articulation.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-[#e7a977] text-black font-semibold">
            Start Daily Recall
          </button>

        </div>

      </div>
    </main>
  );
}