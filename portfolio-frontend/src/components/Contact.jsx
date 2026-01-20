import GithubLogo from "../assets/images/logos/GitHub-Logo.png";
import LinkedInLogo from "../assets/images/logos/Linkedin-Logo.png";
import GmailIcon from "../assets/images/logos/Gmail-Logo.png";
import { useState } from "react";



export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section id="contact" className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-10 gap-8 md:gap-12 font-montserrat mt-16 md:mt-0">
      <div className="w-full md:w-1/2 max-w-xl bg-portfolio-bg p-6 sm:p-8 md:p-12 rounded-4xl shadow-sm">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Let's Connect</h2>
        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 sm:p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 text-sm sm:text-base" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 sm:p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 text-sm sm:text-base" />
          <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 sm:p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 text-sm sm:text-base" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="field w-full p-3 sm:p-4 bg-white rounded-xl border-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 text-sm sm:text-base resize-none"></textarea>
          <button type="submit" className="w-full bg-slate-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-slate-600 transition-colors text-sm sm:text-base">
            Send Message
          </button>
          <p className="text-center text-sm sm:text-base font-medium text-slate-600">{result}</p>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full sm:w-auto">

          <a href="https://github.com/Anchetakent"target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform p-3 sm:p-4 rounded-lg hover:bg-slate-50">
            <div className="w-6 sm:w-8 flex justify-center shrink-0">
              <img src={GithubLogo} alt="Github" className="w-16 sm:w-20 h-6 sm:h-7 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline text-sm sm:text-base">@AnchetaKent</span>
          </a>

          <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform p-3 sm:p-4 rounded-lg hover:bg-slate-50">
            <div className="w-6 sm:w-8 flex justify-center shrink-0">
              <img src={GmailIcon} alt="Gmail" className="w-6 sm:w-7 h-5 sm:h-5 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline text-sm sm:text-base break-all">kentlouisea@gmail.com</span>
          </div>

          <a  href="https://www.linkedin.com/in/kentlouiseancheta/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform p-3 sm:p-4 rounded-lg hover:bg-slate-50">
            <div className="w-6 sm:w-8 flex justify-center shrink-0">
              <img src={LinkedInLogo} alt="LinkedIn" className="w-6 sm:w-7 h-6 sm:h-7 object-contain" />
            </div>
            <span className="text-gray-800 font-medium hover:underline text-sm sm:text-base">@kentlouiseancheta</span>
          </a>

        </div>
      </div>
    </section>
  )
}
