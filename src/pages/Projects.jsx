import P1 from '../assets/samplePic.png'

function Projects() {
	const projects = {
		"Project 1": {
			link: "sampleLink.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 2": {
			link: "sampleLink.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 3": {
			link: "sampleLink.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		"Project 4": {
			link: "sampleLink.com",
			description: "lorem ipsum dolor sit amet",
			image: P1,
			alt: "lorem ipsum",
		},
		
	};

	const hiddenHover = "desc transition-all ease-in-out duration-300 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100"
	return (
		<section
			key="projects"
			id="projects"
			className="p-52 section w-full h-auto flex flex-col items-center justify-center gap-30 "
		>
			<h1>Projects</h1>
			<div className="flex flex-row gap-5	h-full w-full">
				{Object.entries(projects).map(([key, value]) => (
					<a key={key} href={value.link} className="group w-100 hover:scale-105 transition ease-in-out duration-300	">
						<div className="w-100% bg-gray-700 rounded-2xl p-3 *:m-2 place-content-center flex flex-col">
							<img src={value.image} alt={value.alt} className="h-100% width-auto rounded-xl block" />
							<h4 className={hiddenHover}>{key}</h4>
							<p className={hiddenHover}>{value.description}</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

export default Projects;
