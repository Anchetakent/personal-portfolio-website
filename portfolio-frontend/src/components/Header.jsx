export function Header() {
  return (
    <header className="w-full p-6 bg-gray-900 shadow-md font-montserrat fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-semibold text-stone-200">welcome!</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="text-stone-200 hover:text-stone-300 hover:underline font-medium">Home</a></li>
            <li><a href="#projects" className="text-stone-200 hover:text-stone-300 hover:underline font-medium">Projects</a></li>
            <li><a href="#skills" className="text-stone-200 hover:text-stone-300 hover:underline font-medium">Skills</a></li>
            <li><a href="#contact" className="text-stone-200 hover:text-stone-300 hover:underline font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}