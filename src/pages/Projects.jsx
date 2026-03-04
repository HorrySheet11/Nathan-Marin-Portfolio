import P1 from "../assets/samplePic.png";

function Projects() {
	const projects = {
		"Project 1": {
			link: "sampleLink1.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 2": {
			link: "sampleLink2.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 3": {
			link: "sampleLink3.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 4": {
			link: "sampleLink4.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
	};

	const hiddenHover =
		"desc transition-all ease-in-out duration-300 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100";
	return (
		<section
			key="projects"
			id="projects"
			className="section h-auto flex flex-col items-center justify-center gap-30 "
		>
			<h1 className="font-bold">Projects</h1>
			<div className="flex flex-row items-center justify-center	h-full w-full flex-wrap">
				{Object.entries(projects).map(([key, value]) => (
					<div key={key} className="max-w-fit bg-gray-700 rounded-2xl p-3 *:m-2 place-content-center flex flex-col m-5 transition-all ease-in-out duration-300 hover:max-h-auto hover:scale-105 hover:bg-gray-800">
						<a
							href={value.link}
							className="group w-150 transition ease-in-out duration-300	"
						>
							<img
								src={value.image}
								alt={value.alt}
								className="h-100% width-auto rounded-xl block"
							/>
							<h4 className={hiddenHover}>{key}</h4>
							<p className={hiddenHover}>{value.description}</p>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
