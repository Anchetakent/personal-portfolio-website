import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full p-4 bg-gray-900 shadow-md font-montserrat fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-semibold text-stone-200">welcome!</h1>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-stone-200 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <nav className={`
          ${isOpen ? "block" : "hidden"} 
          absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:block -m-3
        `}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-stone-300 hover:underline font-medium block">Home</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-stone-300 hover:underline font-medium block">Projects</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-stone-300 hover:underline font-medium block">Skills</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-stone-300 hover:underline font-medium block">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}