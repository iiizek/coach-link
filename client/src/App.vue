<template>
	<RootLayout>
		<HomeLayout v-if="isRootPage">
			<router-view />
		</HomeLayout>
		<router-view v-else />
	</RootLayout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import HomeLayout from "./layouts/HomeLayout.vue";
import RootLayout from "./layouts/RootLayout.vue";

const route = useRoute();
const isRootPage = computed(
	() => route.name === "landing" || route.name === "search"
);
</script>
