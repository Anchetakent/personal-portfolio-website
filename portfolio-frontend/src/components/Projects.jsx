export function Projects() {
  const projectList = [
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },
    { title: "Network Setup", desc: "IT Infrastructure", tech: "Cisco & Windows Server" },

  ];

  return (
    <>
      <section className="min-h-screen bg-white py-24 px-10 font-montserrat">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">My Projects!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projectList.map((project, index) => (
            <div key={index} className="group bg-portfolio-bg rounded-3xl p-6 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="h-56 bg-slate-200 rounded-2xl mb-6 overflow-hidden">
                {/* Place project thumbnail here */}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{project.tech}</p>
              <p className="text-slate-500">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}