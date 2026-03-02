import { createContext, useState } from "react";

export const SectionContext = createContext(null);

export const SectionProvider = ({ children }) => {
	const [activeSection, setActiveSection] = useState('about-me');

	// const handleNavClick = (sectionId) => {
	// 	setActiveSection(sectionId);
	// 	const sectionElement = document.getElementById(sectionId);
	// 	if (sectionElement) {
	// 		sectionElement.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	return (
		<SectionContext.Provider
			value={{ activeSection, setActiveSection }}
		>
			{children}
		</SectionContext.Provider>
	);
};
