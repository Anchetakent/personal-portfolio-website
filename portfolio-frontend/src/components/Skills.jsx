export function Skills({ tools }) {
  const legend = [
    { label: "Learning", color: "bg-blue-500" },
    { label: "Intermediate", color: "bg-yellow-500" },
    { label: "Advanced", color: "bg-orange-500" },
    { label: "Expert", color: "bg-red-500" },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center p-10 font-montserrat">
      <h2 className="text-4xl font-bold mb-10">Tools & Mastery</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-16 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded-full ${item.color} opacity-70`}></span>
            <span className="text-sm font-medium text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {tools.map((tool) => (
          <div key={tool.id} className="flex flex-col items-center group">
            <div className={`w-24 h-24 ${tool.color} bg-opacity-25 shadow-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <span className="text-center text-xs font-bold text-slate-800 px-2">{tool.name}</span>
            </div>
            <p className="font-semibold text-slate-700">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}