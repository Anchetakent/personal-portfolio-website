import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export function Projects({ projectList }) {
  // Use null to track the specific project selected
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="min-h-screen bg-white py-24 px-10 font-montserrat">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900 ">My Projects!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)} // Pass the whole project object here
              className="group cursor-pointer bg-portfolio-bg rounded-3xl p-6 transition-all hover:shadow-xl hover:-translate-y-2 border border-default rounded-base shadow-xs"
            >
              <div className="h-56 bg-slate-200 rounded-2xl mb-6 overflow-hidden">
                <img src={project.image} alt="" className="rounded-2xl w-full h-full object-fill" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-slate-900 font-medium mb-2">{project.tech}</p>
              <p className="text-slate-500 mb-3">{project.desc}</p>

              <button className="cursor-pointer hover:bg-slate-700 hover:text-lime-50 inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
                <svg className="w-4 h-4 ms-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>


      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}