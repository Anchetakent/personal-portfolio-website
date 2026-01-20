import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { projectList } from "./data/ProjectList"

function App() {
  return (
    <>
      <Hero />
      <Projects projectList={projectList}/>
      <Skills />
      <Contact />
      <Header />
    </>
  )
}

export default App
