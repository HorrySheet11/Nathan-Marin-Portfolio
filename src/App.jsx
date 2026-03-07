import Bar from "./components/Bar";
import ProgressBar from "./components/Progressbar.jsx";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Socials from "./pages/Socials.jsx";

function App() {
	return (
		<div className="relative">
			<ProgressBar />
			<Sidebar />
			<AboutMe />
			<Bar />
			<Projects />
			<Bar />
			<Skills />
			<Bar />
			<Socials />
		</div>
	);
}

export default App;
