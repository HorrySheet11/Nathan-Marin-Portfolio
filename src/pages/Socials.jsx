import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaCommentSms, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from "react";

function Socials({screenSize}) {
		const [size, setSize] = useState(30);
		useEffect(() => {
			switch (screenSize) {
				case "xs":
					setSize(20);
					break;
				case "sm":
					setSize(20);
					break;
				case "md":
					setSize(20);
					break;
				case "lg":
					setSize(30);
					break;
				case "xl":
					setSize(40);
					break;
				case "2xl":
					setSize(50);
					break;
				default:
					break;
			}
		}, [screenSize]);
	const socials = {
		Facebook: {
			icon: <FaFacebook size={size} className="block" />,
			link: "https://www.facebook.com/nathaniel.marin.4618",
		},
		Github: {
			icon: <FaGithub size={size} className="block" />,
			link: "https://github.com/HorrySheet11",
		},
		LinkedIn: {
			icon: <FaLinkedin size={size} className="block" />,
			link: "https://www.linkedin.com/in/nathaniel-marin",
		},
		Gmail: {
			icon: <SiGmail size={size} className="block" />,
			link: "https://mail.google.com/mail/u/0/?fs=1&to=marinnathan11@gmail.com&tf=cm",
		},
	};
	return (
		<section
			id="socials"
			className="section h-screen flex flex-col items-center gap-50
			xs:max-sm:gap-10 
			sm:max-md:gap-20 
			lg:max-xl:gap-30"
		>
			<h1 className="font-bold">My Socials</h1>
			<div className="flex flex-row justify-evenly gap-10 mx-auto w-full">
				{Object.entries(socials).map(([name, { icon }]) => (
					<div
						key={name}
						className="hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300"
					>
						<a
							href={socials[name].link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{icon}
						</a>
					</div>
				))}
				<div
						className="hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300"
					>
						<CopyToClipboard
							text="+639709988674"
							onCopy={()=> alert('Copied!')}
						>
							<FaCommentSms size={size} className="block" />
						</CopyToClipboard>
					</div>
			</div>
		</section>
	);
}

export default Socials;
