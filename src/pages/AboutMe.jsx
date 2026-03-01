import pfp from "../assets/author-image.jpg";

function AboutMe() {
	return (
		<section
			id="about-me"
			className="p-52 section w-full h-screen grid place-items-center grid-cols-2 gap-10"
		>
			<img src={pfp} alt="about-me-pic" className="rounded-full" />
			<div className="*:mb-5">
				<h1 className="font-bold">Nathaniel Marin</h1>
				<h5 className="font-bold">Aspiring Web Developer</h5>
				<p className="indent-3">
					I am a person who is willing to be enlightened and willing to learn
					more as a successful programmer. I currently finished my course in
					Bachelor of Science in Computer Science and aspire to be a successful
					web developer capable of creating and maintaining web applications. I
					am also intrigued in learning game development.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
