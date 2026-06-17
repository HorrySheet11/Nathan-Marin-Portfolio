import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-4";
import Bar from "./components/Bar";
import ProgressBar from "./components/Progressbar.jsx";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Socials from "./pages/Socials.jsx";

function App() {
	// const size = useContext(SizeContext);
	const [screenSize, setScreenSize] = useState("");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 240) {
				setScreenSize("xs");
			} else if (window.innerWidth >= 240 && window.innerWidth < 360) {
				setScreenSize("sm");
			} else if (window.innerWidth >= 360 && window.innerWidth < 464) {
				setScreenSize("md");
			} else if (window.innerWidth >= 464 && window.innerWidth < 624) {
				setScreenSize("lg");
			} else if (window.innerWidth >= 624 && window.innerWidth < 800) {
				setScreenSize("xl");
			} else if (window.innerWidth >= 800) {
				setScreenSize("2xl");
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
			<Scrollbars
				universal={true}
				autoHide
				style={{ width: "100vw", height: "100vh" }}
			>
		<div className="relative">
			
			
				<Sidebar />
				<AboutMe />
				<Bar />
				<Projects />
				<Bar />
				<Skills screenSize={screenSize} />
				<Bar />
				<Socials screenSize={screenSize} />
			<ProgressBar />
		</div>
			</Scrollbars>
	);
}

export default App;
