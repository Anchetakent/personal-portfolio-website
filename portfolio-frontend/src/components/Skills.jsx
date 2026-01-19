export function Skills() {
  const tools = ["React", "JavaScript", "Tailwind", "Cisco", "After Effects", "Premiere Pro"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-10 font-montserrat">
      <h2 className="text-4xl font-bold mb-20">Tools & Mastery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {tools.map((tool) => (
          <div key={tool} className="flex flex-col items-center group">
            <div className="w-24 h-24 bg-white shadow-md rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-bold text-blue-600">{tool[0]}</span>
            </div>
            <p className="font-semibold text-slate-700">{tool}</p>
          </div>
        ))}
      </div>
    </section>
  )
}