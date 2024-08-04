<template>
	<header
		class="top-0 left-0 z-50 sticky flex justify-between items-center border-accent-m-400 dark:border-accent-m-600 dark:header-glass-d px-4 py-2 border-b header-glass-l"
	>
		<router-link to="/"
			><div class="flex items-center gap-4 cursor-pointer">
				<img class="w-14 h-14" :src="Logo" alt="Logo" />
				<div>
					<h1 class="text-2xl">CoachLink</h1>
					<p
						class="text-nowrap text-shades-l-700 text-sm max-sm:text-wrap dark:text-shades-d-300"
					>
						У нас лучшие наставники
					</p>
				</div>
			</div></router-link
		>

		<nav class="relative flex justify-end items-center gap-4 w-full">
			<AuthMenu />

			<div
				class="hover:opacity-70 w-10 h-10 transition-all cursor-pointer"
				@click="toggleDark()"
			>
				<SunIcon v-if="!isDark" />
				<MoonIcon v-else />
			</div>
		</nav>
	</header>
</template>

<script setup>
import Logo from "@/assets/logo.svg";
import AuthMenu from "./AuthMenu.vue";

import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
