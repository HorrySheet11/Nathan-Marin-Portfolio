import { FaCss3Alt, FaGitAlt, FaNode, FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
	SiExpress,
	SiFastapi,
	SiPassport,
	SiPostgresql,
	SiPrisma,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FaGithub, FaReact } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { BiLogoMongodb } from "react-icons/bi";
import { SiDrizzle, SiMongoose  } from "react-icons/si";

function Skills({screenSize}) {
	const [size, setSize] = useState(30);
	useEffect(() => {
		switch (screenSize) {
			case "xs":
				setSize(30);
				break;
			case "sm":
				setSize(50);
				break;
			case "md":
				setSize(80); 
				break;
			case "lg":
				setSize(100);
				break;
			case "xl":
				setSize(150);
				break;
			case "2xl":
				setSize(180);
				break;
			default:
				break;
		}
	}, [screenSize]);
	const skills = {
		HTML: { icon: <FaHtml5 size={size} className="block" /> },
		CSS: { icon: <FaCss3Alt size={size} className="block" /> },
		TailwindCss: {
			icon: <RiTailwindCssFill size={size} className="block" />,
		},
		JavaScript: {
			icon: <IoLogoJavascript size={size} className="block" />,
		},
		React: { icon: <FaReact size={size} className="block" /> },
		NodeJS: { icon: <FaNode size={size} className="block" /> },
		ExpressJS: { icon: <SiExpress size={size} className="block" /> },
		"Passport.js": { icon: <SiPassport size={size} className="block" /> },
		"Prisma ORM": { icon: <SiPrisma size={size} className="block" /> },
		"Drizzle ORM": { icon: <SiDrizzle size={size} className="block" /> },
		Git: { icon: <FaGitAlt size={size} className="block" /> },
		Github: { icon: <FaGithub size={size} className="block" /> },
		MySQL: { icon: <GrMysql size={size} className="block" /> },
		PostgreSQL: { icon: <SiPostgresql size={size} className="block" /> },
		MongoDB: { icon: <BiLogoMongodb size={size} className="block" /> },
		Mongoose: { icon: <SiMongoose  size={size} className="block" /> },
		Python: { icon: <FaPython size={size} className="block" /> },
		FastAPI: { icon: <SiFastapi size={size} className="block" /> },
	};
	return (
		<section
			id="skills"
			className="section h-auto flex flex-col items-center justify-center gap-30 xs:max-sm:gap-10
			sm:max-md:gap-20
			md:max-lg:gap-30 "
		>
			<h1 className="font-bold">My Skills</h1>

			<Swiper
				slidesPerView={"auto"}
				centeredSlides={true}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
					waitForTransitions: true,
				}}
				speed={5000}
				loop={true}
				grabCursor={true}
				modules={[Autoplay]}
				breakpoints={{
					200: {
						spaceBetween: 10,
					},
					353: {
						spaceBetween: 20,
					},
					464: {
						spaceBetween: 30,
					},
					624: {
						spaceBetween: 40,
					},
				}}
				id="swiper-wrapper"
				className="h-auto w-full"
			>
				{Object.entries(skills).map(([key, value]) => {
					return (
						<SwiperSlide
							key={key}
							style={{ width: "auto" }}
							className="swiper-slide h-210 w-fit group relative hover:z-50 bg-gray-700 rounded-2xl p-5 *:m-2 flex flex-col items-center justify-center transition-all ease-in-out duration-300 hover:max-h-1/2 hover:scale-105 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-500
								xs:max-sm:p-2 
								sm:max-md:p-3
								md:max-lg:p-4
								lg:p-5"
						>
							<div className="h-100% w-t rounded-xl block">{value.icon}</div>
							<h4 className="group-hover:shadow-2xl group-hover:shadow-gray-500 w-full absolute -left-2 -bottom-2 desc transition-all ease-in-out duration-300 opacity-0 h-auto group-hover:opacity-100 bg-gray-800 rounded-b-2xl p-2 text-center font-bold">
								{key}
							</h4>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Skills;
