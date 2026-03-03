import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects.jsx";

function App() {
	return (
		<div className="relative">
			<Sidebar />
			<div id="el" className=" h-5 w-full bg-linear-to-r from-blue-700 to-cyan-500 fixed -left-1/2 bottom-0  rounded-r-2xl"></div>
			<AboutMe />
			<Bar />
			<Projects />
		</div>
	);
}

export default App;
