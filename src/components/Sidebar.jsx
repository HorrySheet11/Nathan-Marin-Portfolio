import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoIosPerson } from "react-icons/io";
import { TiContacts } from "react-icons/ti";
import pfp from "../assets/author-image.jpg";

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// }

function ButtonBar(props) {
	return (
		<div
			className={`w-10 h-1.5 bg-white mt-1.5 mb-1.5 mr-0 ml-0 rounded-xs transition duration-400 ${props.className}`}
		></div>
	);
}

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const nav = {
		"About me": [
			"#about-me",
			<IoIosPerson key="about-me" className="inline" />,
		],
		Projects: ["#projects", <GrProjects key="projects" className="inline" />],
		Skills: ["#skills", <FaCode key="skills" className="inline" />],
		Contact: ["#contact", <TiContacts key="contact" className="inline" />],
	};

	return (
		<div
			id="sidebar-wrapper"
			className={`z-50 rounded-r-3xl bg-linear-to-t from-blue-700 to-cyan-500 p-8 font-bold text-2xl h-screen w-max fixed left-0 transition ease-in-out duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
		>
			<button
				type="button"
				className="inline-block cursor-pointer absolute top-1 -right-12 "
				onClick={() => setIsOpen(!isOpen)}
			>
				<ButtonBar
					className={isOpen && "translate-x-0 translate-y-3 -rotate-45"}
				/>
				<ButtonBar className={isOpen && "opacity-0"} />
				<ButtonBar
					className={isOpen && "translate-x-0 -translate-y-3 rotate-45"}
				/>
			</button>
			<nav className="h-full">
				<ul className="sidebar-nav *:m-3 h-full flex flex-col items-start- justify-center">
					<img
						src={pfp}
						alt="Nathaniel Marin"
						className="rounded-full h-40 w-40"
					/>
					{Object.entries(nav).map(([key, value]) => (
						<li
							key={key}
							className="hover:scale-110 transition ease-in-out duration-200 cursor-pointer"
						>
							<a href={value[0]}>
								{value[1]} {key}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
