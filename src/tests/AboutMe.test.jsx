import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import AboutMe from "../pages/AboutMe.jsx";

describe("AboutMe test", () => {
	it("should show picture", () => {
		render(<AboutMe />);

		const image = screen.getByRole("img");

		expect(image).toBeInTheDocument();
	});

	it("should show name", () => {
		render(<AboutMe />);

		const name = screen.getByRole("heading", { name: "Nathaniel Marin" });

		expect(name).toBeInTheDocument();
	});

	it("should show title", () => {
		render(<AboutMe />);

		const title = screen.getByRole("heading", {
			name: "Aspiring Web Developer",
		});

		expect(title).toBeInTheDocument();
	});

	it("should show paragraph", () => {
		render(<AboutMe />);

		const paragraph = screen.getByText(
			/I am a person who is open to learning and acquiring new knowledge as a successful programmer/,
		);

		expect(paragraph).toBeInTheDocument();
	});
});
