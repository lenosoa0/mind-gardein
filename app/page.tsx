export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] border-r border-slate-700 p-6">
        <h1 className="text-2xl font-bold mb-8 text-emerald-400">
          Mind Gardein
        </h1>

        <nav className="space-y-3">
          <button className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700">
            Dashboard
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
            Dictionary
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
            Vault
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
            Daily Recall
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
            Analytics
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        <h2 className="text-4xl font-bold mb-2">
          Welcome Back
        </h2>

        <p className="text-slate-400 mb-8">
          Build your personal knowledge garden.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400 mb-2">
              الكلمات
            </h3>

            <p className="text-4xl font-bold">
              0
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400 mb-2">
              المواضيع
            </h3>

            <p className="text-4xl font-bold">
              0
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400 mb-2">
              التذكر
            </h3>

            <p className="text-4xl font-bold">
              0%
            </p>
          </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6">

          <h3 className="text-2xl font-bold mb-4">
            Dictionary
          </h3>

          <p className="text-slate-400">
            لم تتم إضافة كلمات بعد.
          </p>

        </div>

      </main>
    </div>
  );
}