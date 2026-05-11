import { FaCss3Alt, FaGitAlt, FaNode, FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPassport, SiPostgresql, SiPrisma, SiFastapi  } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaGithub, FaReact } from "react-icons/fa6";
import { Autoplay} from "swiper/modules";

function Skills() {
	const skills = {
		HTML: { icon: <FaHtml5 size={180} className="block" /> },
		CSS: { icon: <FaCss3Alt size={180} className="block" /> },
		TailwindCss: { icon: <RiTailwindCssFill size={180} className="block" /> },
		JavaScript: { icon: <IoLogoJavascript size={180} className="block" /> },
		React: { icon: <FaReact size={180} className="block" /> },
		NodeJS: { icon: <FaNode size={180} className="block" /> },
		ExpressJS: { icon: <SiExpress size={180} className="block" /> },
		"Prisma ORM": { icon: <SiPrisma size={180} className="block" /> },
		"Passport.js": { icon: <SiPassport size={180} className="block" /> },
		Git: { icon: <FaGitAlt size={180} className="block" /> },
		Github: { icon: <FaGithub size={180} className="block" /> },
		MySQL: { icon: <GrMysql size={180} className="block" /> },
		PostgreSQL: { icon: <SiPostgresql size={180} className="block" /> },
		Python: { icon: <FaPython size={180} className="block" /> },
		FastAPI: { icon: <SiFastapi  size={180} className="block" /> },
	};
	return (
		<section
			id="skills"
			className="section h-auto flex flex-col items-center justify-center gap-30"
		>
			<h1 className="font-bold">My Skills</h1>

			<Swiper
				slidesPerView={1}
        spaceBetween={10}
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
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1190: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
					1360: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
				id="swiper-wrapper"
				className="h-auto w-full"
			>
				{Object.entries(skills).map(([key, value]) => {
					return (
						<SwiperSlide
							
							key={key}
							className="swiper-slide h-210 w-230 group relative hover:z-50 bg-gray-700 rounded-2xl p-5 *:m-2 flex flex-col items-center justify-center transition-all ease-in-out duration-300 hover:max-h-1/2 hover:scale-105 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-500"
						>
								<div className="h-100% w-fit rounded-xl block">{value.icon}</div>
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
