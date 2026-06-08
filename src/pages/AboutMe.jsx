import pfp from "../assets/author-image.jpg";

function AboutMe() {
	return (
		<section
			id="about-me"
			className="section grid place-items-center grid-cols-2 gap-10 small-section xs:max-sm:gap-3 xs:max-md:grid-cols-1 
			sm:max-md:p-13 sm:max-md:gap-5"
		>
			<img
				src={pfp}
				alt="about-me-pic"
				className="rounded-full w-100 xs:max-sm:self-start xs:max-md:w-40"
			/>
			<div className="*:mb-5 xs:max-sm:**:mb-2 sm:max-md:**:mb-3">
				<h1 className="font-bold ">Nathaniel Marin</h1>
				<h5 className="">Aspiring Web Developer</h5>
				<p className="indent-3">
					I am a person who is open to learning and acquiring new knowledge as a
					successful programmer. Having recently completed my Bachelor of
					Science in Computer Science, I aspire to become a proficient web
					developer capable of designing and maintaining web applications.
					Additionally, I have a keen interest in game development.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
