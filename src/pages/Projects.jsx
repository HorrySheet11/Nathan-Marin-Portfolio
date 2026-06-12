import bibleApp from "../assets/projectPics/BibleAppSs.png";
import blogApi from "../assets/projectPics/BlogAPISs.png";
import ClubMemberPostBoard from "../assets/projectPics/ClubMemberPostBoardSs.png";
import FileUploader from "../assets/projectPics/FileUploaderSs.png";

function Projects() {
	const projects = {
		"Blog API": {
			link: "https://blog-api-one-lake.vercel.app",
			description:
				"An implementation of rest API in nodejs which also uses passport jwt strategy for authentication. Stores user info and posts in a postgres database in Neon.",
			image: blogApi,
			alt: "homepage screenshot of blog api",
		},
		"File Uploader": {
			link: "https://fileuploader-zqjn.onrender.com",
			description:
				"An entirely backend app which uses ejs for templating and expressJS for backend and routing. Uses multer for file uploads and stores files in a Supabase bucket. Uses passport local strategy for authentication.",
			image: FileUploader,
			alt: "homepage screenshot of File Uploader",
		},
		"Club Member Post Board": {
			link: "https://clubmemberpostboard.onrender.com",
			description:
				"An implementation of passport local strategy for authentication and role based authorization. Stores user info and posts in a postgres database in Neon. Uses ejs for templating and expressJS for backend and routing.",
			image: ClubMemberPostBoard,
			alt: "homepage screenshot of Club member post board",
		},
		"Bible App": {
			link: "https://bible-app-pi-seven.vercel.app",
			description:
				"A simple front-end react bible app that uses a bible API for data like books, chapters and verses.",
			image: bibleApp,
			alt: "homepage screenshot of bible app",
		},
	};

	return (
		<section
			key="projects"
			id="projects"
			className="section h-auto flex flex-col items-center justify-center gap-30 w-full
			xs:max-sm:gap-10
			sm:max-md:gap-20
			md:max-lg:gap-30
			lg:max-xl:"
		>
			<h1 className="font-bold">Projects I have made</h1>
			<div
				className="flex flex-row items-center justify-center	h-full w-full flex-wrap gap-10
					xs:max-sm:gap-2
					sm:max-md:gap-4
					md:max-lg:gap-6
					lg:max-xl:gap-8"
			>
				{Object.entries(projects).map(([key, value]) => (
					<div
						key={key}
						className="relative hover:z-50 h-auto w-auto bg-gray-700 rounded-2xl p-5 place-content-center flex flex-col  transition-all ease-in-out duration-300 hover:max-h-1/2 hover:scale-105 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-500 hover:rounded-b-none 
							xs:max-sm:p-2 xs:max-sm:m-2
							sm:max-md:p-3 sm:max-md:m-3
							md:max-lg:p-4 md:max-lg:m-4
							lg:max-xl:"
					>
						{/* FIXME: fix project divs size */}
						<a
							href={value.link}
							className="group transition ease-in-out duration-300	"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={value.image}
								alt={value.alt}
								className="h-auto max-w-full rounded-xl block xs:h-50"
							/>
							<div
								className="group-hover:shadow-2xl group-hover:shadow-gray-500 w-[30vw + 2rem] absolute left-0 desc transition-all ease-in-out duration-300 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-5 bg-gray-800 rounded-b-2xl p-3
								xs:max-sm:group-hover:translate-y-2
								sm:max-md:group-hover:translate-y-3
								md:max-lg:group-hover:translate-y-4"
							>
								<h4>{key}</h4>
								<p>{value.description}</p>
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
