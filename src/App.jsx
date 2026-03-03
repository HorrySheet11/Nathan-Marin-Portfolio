import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/Progressbar.jsx";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects.jsx";

function App() {
	return (
		<div className="relative">
			<ProgressBar />
			<Sidebar />
			<AboutMe />
			<Bar />
			<Projects />
		</div>
	);
}

export default App;
