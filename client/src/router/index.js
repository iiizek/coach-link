import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import AuthStudentPage from "@/views/AuthStudentPage.vue";
import AuthMentorPage from "@/views/AuthMentorPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "landing", component: LandingPage },
		{ path: "/search", name: "search", component: SearchPage },
		{ path: "/auth-student", name: "auth-student", component: AuthStudentPage },
		{ path: "/auth-mentor", name: "auth-mentor", component: AuthMentorPage },
	],
});

export default router;
