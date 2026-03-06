import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPassport } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


function Skills() {
	const skills = {
		HTML: { icon: <FaHtml5 size={200} className="block" /> },
		CSS: { icon: <FaCss3Alt size={200} className="block" /> },
		JavaScript: { icon: <IoLogoJavascript size={200} className="block" /> },
		NodeJS: { icon: <FaNode size={200} className="block" /> },
		ExpressJS: { icon: <SiExpress size={200} className="block" /> },
		"Prisma ORM": { icon: <SiPrisma size={200} className="block" /> },
		Git: { icon: <FaGitAlt size={200} className="block" /> },
		"Passport.js": { icon: <SiPassport size={200} className="block" /> },
		TailwindCss: { icon: <RiTailwindCssFill size={200} className="block" /> },
	};
	return (
		<section
			id="skills"
			className="section h-screen flex flex-col items-center justify-center gap-30"
		>
			<h1 className="font-bold">Skills</h1>
			<div className="flex flex-row items-center justify-center	h-full w-full flex-wrap">
				{Object.entries(skills).map(([key, value]) => {
					return (
						<div
							key={key}
							className="group relative hover:z-50 bg-gray-700 rounded-2xl p-2 *:m-2 place-content-center flex flex-col  m-5 transition-all ease-in-out duration-300 hover:max-h-1/2 hover:scale-105 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-500 hover:rounded-b-none "
						>
							<div className="h-100% width-auto rounded-xl block">{value.icon}</div>
							{/* FIXME: fix skill title */}
							<h4 className="group-hover:shadow-2xl group-hover:shadow-gray-500 w-58 absolute -left-2 -bottom-8 desc transition-all ease-in-out duration-300 opacity-0 h-auto group-hover:opacity-100 group-hover:translate-y-5 bg-gray-800 rounded-b-2xl p-2 text-center font-bold">
								{key}
							</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Skills;
