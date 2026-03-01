import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "en-GB",
	base: "/personal-website/",
	title: "Lim Tze Yang",
	titleTemplate: "AI Engineer",
	description:
		"A portfolio website showcasing Lim Tze Yang's achievements, experiences, and qualifications",
	head: [["link", { rel: "icon", href: "/personal-website/favicon.ico" }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "About Me", link: "/" },
			{ text: "Projects", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/limtzeyang02" },
			{ icon: "linkedin", link: "https://www.linkedin.com/in/lim-tze-yang" },
		],
	},
});
