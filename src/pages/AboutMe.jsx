import pfp from "../assets/author-image.jpg";

function AboutMe() {
	return (
		<section
			id="about-me"
			className="section grid place-items-center grid-cols-2 gap-10 small-section 
			xs:max-sm:gap-3 xs:max-lg:grid-cols-1 
			sm:max-md:gap-5 
			lg:max-xl:gap-7 
			xl:max-2xl:gap-9"
		>
			<img
				src={pfp}
				alt="about-me-pic"
				className="rounded-full w-100 xs:max-sm:self-start 
				xs:max-md:w-40 
				md:max-lg:w-60
				lg:max-xl:w-70
				"
			/>
			<div className="*:mb-5 xs:max-sm:**:mb-2 sm:max-md:**:mb-3 ">
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
