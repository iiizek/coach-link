import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import SearchPage from "@/views/SearchPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "landing", component: LandingPage },
		{ path: "/search", name: "search", component: SearchPage },
	],
});

export default router;
