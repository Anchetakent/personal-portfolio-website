import GithubLogo from "../assets/images/logos/Github-Logo.png";
import LinkedInLogo from "../assets/images/logos/Linkedin-Logo.png";
import GmailIcon from "../assets/images/logos/Gmail-Logo.png";

export function Contact() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-10 font-montserrat">
      <div className="w-full max-w-xl bg-portfolio-bg p-12 rounded-4xl shadow-sm">
        <h2 className="text-4xl font-bold mb-8 text-center">Let's Connect</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300" />
          <input type="email" placeholder="Subject" className="w-full p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300"></textarea>
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>

      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className="flex flex-col space-y-6">

          <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-8 flex justify-center"> {/* Fixed width wrapper for alignment */}
              <img src={GithubLogo} alt="Github" className="w-20 h-7 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline">@AnchetKent</span>
          </div>
          
          <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-8 flex justify-center">
              <img src={GmailIcon} alt="Gmail" className="w-7 h-5 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline">kentlouisea@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-8 flex justify-center">
              <img src={LinkedInLogo} alt="LinkedIn" className="w-7 h-7 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline">kent-louise-anchet</span>
          </div>

        </div>
      </div>
    </section>
  )
}