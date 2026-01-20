export function Skills({ tools }) {
  const legend = [
    { label: "Learning", color: "bg-blue-500" },
    { label: "Intermediate", color: "bg-yellow-500" },
    { label: "Advanced", color: "bg-orange-500" },
    { label: "Expert", color: "bg-red-500" },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 font-montserrat mt-16 md:mt-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Tools & Mastery</h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.color} opacity-70`}></span>
            <span className="text-xs sm:text-sm font-medium text-slate-600">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {tools.map((tool) => (
          <div key={tool.id} className="flex flex-col items-center group">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${tool.color} bg-opacity-25 shadow-md rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform`}>
              <span className="text-center text-xs font-bold text-slate-800 px-2">{tool.name}</span>
            </div>
            <p className="font-semibold text-slate-700 text-xs sm:text-sm text-center">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}