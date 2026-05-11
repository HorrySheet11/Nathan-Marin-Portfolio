import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaCommentSms, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Socials() {
	const socials = {
		Facebook: {
			icon: <FaFacebook size={50} className="block" />,
			link: "https://www.facebook.com/nathaniel.marin.4618",
		},
		Github: {
			icon: <FaGithub size={50} className="block" />,
			link: "https://github.com/HorrySheet11",
		},
		LinkedIn: {
			icon: <FaLinkedin size={50} className="block" />,
			link: "https://www.linkedin.com/in/nathaniel-marin",
		},
		Gmail: {
			icon: <SiGmail size={50} className="block" />,
			link: "https://mail.google.com/mail/u/0/?fs=1&to=marinnathan11@gmail.com&tf=cm",
		},
	};
	return (
		<section
			id="socials"
			className="section h-screen flex flex-col items-center gap-50"
		>
			<h1 className="font-bold">My Socials</h1>
			<div className="flex flex-row gap-10">
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
							<FaCommentSms size={50} className="block" />
						</CopyToClipboard>
					</div>
			</div>
		</section>
	);
}

export default Socials;
