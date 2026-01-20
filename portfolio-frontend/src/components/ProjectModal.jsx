export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 bottom-0 z-[70] flex justify-center px-4">
        
        <div className="bg-white w-full max-w-5xl min-h-[40vh] max-h-[90vh] overflow-y-auto rounded-t-2xl shadow-2xl p-8 transform transition-transform animate-in slide-in-from-bottom duration-500 ease-out">
          
          <div className="flex justify-between items-start mb-4">
            <div className="max-w-[80%]">
              <h2 className="text-3xl font-bold text-slate-900 mt-1 break-words">
                {project.title}
              </h2>
              <span className="text-sm font-bold text-slate-900 uppercase tracking-widest block mt-1">
                {project.tech}
              </span>
              <p className="text-sm font-semibold text-slate-900 tracking-widest underline mt-2 break-all">
                 <a href={project.github} target="_blank" rel="noreferrer">
                   {project.github}
                 </a>
              </p>
            </div>

            <button 
              onClick={onClose} 
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-8 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 mb-3">Project Overview</h4>
            
            <div className="text-slate-600 leading-relaxed whitespace-pre-line break-words">
              {project.detailedDesc}
            </div>
          </div>
          
          <div className="h-10" />
          
        </div>
      </div>
    </>
  );
}