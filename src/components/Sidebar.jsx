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
			className={`w-10 h-1.5 bg-white dark:bg-white mt-1.5 mb-1.5 mr-0 ml-0 rounded-xs transition duration-400 ${props.className}
						xs:max-sm:w-7 xs:max-sm:h-1 xs:max-sm:mt-1 xs:max-sm:mr-3 xs:max-sm:ml-0 xs:max-sm:rounded-xs
						sm:max-md:w-8 sm:max-md:h-1 sm:max-md:mt-1.2 sm:max-md:mr-2 sm:max-md:ml-0 sm:max-md:rounded-xs
						md:max-lg:w-9 md:max-lg:h-1 md:max-lg:mt-1. md:max-lg:mr-1 md:max-lg:ml-0 md:max-lg:rounded-xs
						`}
		></div>
	);
}

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const nav = {
		"About me": ["#about-me", <IoIosPerson key="about-me" className="inline" />,],
		Projects: ["#projects", <GrProjects key="projects" className="inline" />],
		Skills: ["#skills", <FaCode key="skills" className="inline" />],
		Socials: ["#socials", <TiContacts key="contact" className="inline" />],
	};

	return (
		<div
			id="sidebar-wrapper"
			className={`z-50 rounded-r-3xl bg-linear-to-t from-blue-700 to-cyan-500 dark:bg-linear-to-t dark:from-blue-700 dark:to-cyan-500 p-20 font-bold text-2xl h-screen w-max fixed left-0 transition ease-in-out duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}
			xs:max-sm:p-0 
			sm:max-md:p-2 
			md:max-lg:p-4 
			lg:max-xl:p-10
			`}
		>
			<button
				type="button"
				className="inline-block cursor-pointer absolute top-1 -right-12 "
				onClick={() => setIsOpen(!isOpen)}
			>
				<ButtonBar
					className={isOpen && "translate-x-0 translate-y-3 -rotate-45 xs:max-lg:translate-y-2 "}
				/>
				<ButtonBar className={isOpen && "opacity-0"} />
				<ButtonBar
					className={isOpen && "translate-x-0 -translate-y-3 rotate-45"}
				/>
			</button>
			<nav className="h-full">
				<ul className="sidebar-nav p-3 gap-6 h-full flex flex-col items-start- justify-center
				xs:max-sm:gap-2
				sm:max-md:gap-3
				md:max-lg:gap-4
				lg:max-xl:gap-5
				">
					<img
						src={pfp}
						alt="Nathaniel Marin"
						className="rounded-full h-40 w-40 xs:max-md:hidden"
					/>
					{Object.entries(nav).map(([key, value]) => (
						<li
							key={key}
							className="hover:scale-110 transition ease-in-out duration-200 cursor-pointer
								xs:max-sm:text-sm sm:max-md:text-base md:max-lg:text-lg lg:-max-xl:text-xl "
						>
							<a href={value[0]} onClick={() => setIsOpen(false)}>
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
