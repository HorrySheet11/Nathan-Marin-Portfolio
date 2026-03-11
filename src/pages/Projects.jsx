import blogApi from "../assets/projectPics/BlogAPISs.png";
import FileUploader from "../assets/projectPics/FileUploaderSs.png";
import ClubMemberPostBoard from "../assets/projectPics/ClubMemberPostBoardSs.png";

function Projects() {
	const projects = {
		"Blog API": {
			link: "https://blog-api-one-lake.vercel.app",
			description: "An implementation of rest API in nodejs which also uses passport jwt strategy for authentication. Stores user info and posts in a postgres database in Neon.",
			image: blogApi,
			alt: "homepage screenshot of blog api",
		},
		"File Uploader": {
			link: "https://fileuploader-zqjn.onrender.com",
			description: "An entirely backend app which uses ejs for templating and expressJS for backend and routing. Uses multer for file uploads and stores files in a Supabase bucket. Uses passport local strategy for authentication.",
			image: FileUploader,
			alt: "homepage screenshot of File Uploader",
		},
		"Club Member Post Board": {
			link: "https://clubmemberpostboard.onrender.com",
			description: "An implementation of passport local strategy for authentication and role based authorization. Stores user info and posts in a postgres database in Neon. Uses ejs for templating and expressJS for backend and routing.",
			image: ClubMemberPostBoard,
			alt: "homepage screenshot of Club member post board",
		},
		"Project 4": {
			link: "sampleLink4.com",
			description: "lorem ipsum dolor sit amet",
			image: blogApi,
			alt: "lorem ipsum",
		},
	};

	const hiddenHover =
		"group-hover:shadow-2xl group-hover:shadow-gray-500 w-160 absolute -left-0 desc transition-all ease-in-out duration-300 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-5 bg-gray-800 rounded-b-2xl p-3";
	return (
		<section
			key="projects"
			id="projects"
			className="section h-auto flex flex-col items-center justify-center gap-30"
		>
			<h1 className="font-bold">Projects I have made</h1>
			<div className="flex flex-row items-center justify-center	h-full w-full flex-wrap">
				{Object.entries(projects).map(([key, value]) => (
					<div
						key={key}
						className="relative hover:z-50 max-w-fit bg-gray-700 rounded-2xl p-3 *:m-2 place-content-center flex flex-col m-5 transition-all ease-in-out duration-300 hover:max-h-1/2 hover:scale-105 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-500 hover:rounded-b-none "
					>
						<a
							href={value.link}
							className="group w-150 transition ease-in-out duration-300	"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={value.image}
								alt={value.alt}
								className="h-100% width-auto rounded-xl block"
							/>
							<div className={hiddenHover}>
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
