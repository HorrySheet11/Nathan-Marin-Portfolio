import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects.jsx";

function App() {
	return (
		<>
			<Sidebar />
			<AboutMe />
			<Bar />
			<Projects />
		</>
	);
}

export default App;
