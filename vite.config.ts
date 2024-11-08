import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA(),
		// VitePWA({
		// 	registerType: "autoUpdate",
		// 	manifest: {
		// 		name: "Todo PWA",
		// 		short_name: "Todo",
		// 		description: "A simple todo PWA built with SvelteKit",
		// 		theme_color: "#ffffff",
		// 		icons: [
		// 			{
		// 				src: "pwa-192x192.png",
		// 				sizes: "192x192",
		// 				type: "image/png",
		// 			},
		// 			{
		// 				src: "pwa-512x512.png",
		// 				sizes: "512x512",
		// 				type: "image/png",
		// 			},
		// 		],
		// 	},
		// }),
	],

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
