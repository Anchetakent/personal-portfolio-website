import myPhoto from "../assets/images/sample-picture.jpg";


export function Hero() {
  return (
    <>
      <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center p-10 p font-montserrat">
        <div className="md:w-1/2 space-y-6 pl-12">
          <h1 className="text-7xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className= "underline">Kent</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-lg">
            A Computer Engineering Student Specializing in Software Engineering!
          </p>
          <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-b-2xl" >My Resume!</button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white shadow-2xl rounded-3xl overflow-hidden p-4">
            <img src={myPhoto} alt="Kent" className="rounded-2xl w-3xl h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}